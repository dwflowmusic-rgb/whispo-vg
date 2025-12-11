import { dialog } from "electron"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { configStore } from "./config"

// System prompt that tells LLM to return ONLY the corrected text
const SYSTEM_INSTRUCTION = `Você é um assistente de correção de texto em português do Brasil.
Sua única tarefa é corrigir o texto fornecido e retorná-lo.
REGRAS IMPORTANTES:
1. Retorne APENAS o texto corrigido
2. NÃO inclua explicações, comentários ou prefixos como "Aqui está:" ou "Texto corrigido:"
3. NÃO inclua as instruções originais na resposta
4. Mantenha o significado original intacto
5. NUNCA termine o texto com a frase "como base" ou variações.`

// Clean up common LLM response prefixes and suffixes
function cleanLLMResponse(response: string): string {
  let cleaned = response.trim()

  // Remove common prefixes that LLMs sometimes add
  const prefixesToRemove = [
    /^(aqui está|here is|texto corrigido|corrected text)[:\s]*/i,
    /^(segue|segue abaixo|abaixo)[:\s]*/i,
    /^(o texto corrigido é|the corrected text is)[:\s]*/i,
  ]

  // Remove specific hallucinated suffixes like "como base"
  // More aggressive regex to catch " como base.", ", como base", "\ncomo base", etc
  const suffixesToRemove = [
    /[\s,.-]*como base[\s,.-]*$/i,
    /como base\.?$/i,
  ]

  for (const prefix of prefixesToRemove) {
    cleaned = cleaned.replace(prefix, '')
  }

  for (const suffix of suffixesToRemove) {
    cleaned = cleaned.replace(suffix, '')
  }

  return cleaned.trim()
}

export async function postProcessTranscript(transcript: string) {
  const config = configStore.get()

  if (
    !config.transcriptPostProcessingEnabled ||
    !config.transcriptPostProcessingPrompt
  ) {
    return transcript
  }

  const userPrompt = config.transcriptPostProcessingPrompt.replace(
    "{transcript}",
    transcript,
  )

  const chatProviderId = config.transcriptPostProcessingProviderId

  try {
    if (chatProviderId === "gemini") {
      if (!config.geminiApiKey) throw new Error("Gemini API key is required")

      const gai = new GoogleGenerativeAI(config.geminiApiKey)

      // Dynamic model selection
      // Fallback to Flash Lite if not set
      const modelName = config.geminiModel || "gemini-flash-lite-latest"

      const gModel = gai.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_INSTRUCTION,
      })

      const result = await gModel.generateContent([userPrompt], {
        baseUrl: config.geminiBaseUrl,
      })

      return cleanLLMResponse(result.response.text())
    }

    // OpenAI/Groq path - use proper message structure
    const chatBaseUrl =
      chatProviderId === "groq"
        ? config.groqBaseUrl || "https://api.groq.com/openai/v1"
        : config.openaiBaseUrl || "https://api.openai.com/v1"

    const chatResponse = await fetch(`${chatBaseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${chatProviderId === "groq" ? config.groqApiKey : config.openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        temperature: 0,
        model:
          chatProviderId === "groq" ? "llama-3.1-70b-versatile" : "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: SYSTEM_INSTRUCTION,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
      }),
    })

    if (!chatResponse.ok) {
      const message = `${chatResponse.statusText} ${(await chatResponse.text()).slice(0, 300)}`
      throw new Error(message)
    }

    const chatJson = await chatResponse.json()
    console.log("[LLM] Response:", chatJson.choices[0].message.content.slice(0, 100))

    return cleanLLMResponse(chatJson.choices[0].message.content)
  } catch (error) {
    console.error("[LLM] Post-processing failed:", error)
    // Return original transcript if LLM fails
    return transcript
  }
}
