# Whispo - Windows Edition

[🇧🇷 Português](#português) | [🇺🇸 English](#english)

---

## Português

### 🎙️ Sobre

**Whispo** é uma ferramenta de ditado por IA que permite transcrever sua voz em texto automaticamente em qualquer aplicativo. Esta é uma versão otimizada para Windows com launcher silencioso e configuração de inicialização automática.

**Baseado em:** [egoist/whispo](https://github.com/egoist/whispo) v0.1.7

### ✨ Funcionalidades

- ✅ **Ditado por Voz**: Segure `Ctrl` para gravar, solte para transcrever
- ✅ **Inserção Automática**: Texto aparece automaticamente no app ativo
- ✅ **Multi-Provider**: OpenAI, Groq (grátis), ou Gemini
- ✅ **Pós-Processamento**: LLMs podem melhorar gramática/pontuação
- ✅ **Launcher Silencioso**: Executa sem janela de terminal
- ✅ **Auto-Start**: Inicia com o Windows automaticamente
- ✅ **Offline-First**: Dados armazenados localmente

### 🚀 Início Rápido

#### Opção 1: Usar Versão Pré-Compilada (Recomendado)

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/giand/whispo-windows.git
   cd whispo-windows
   ```

2. **Configure API Key (Groq - Grátis):**
   - Crie conta em: <https://console.groq.com>
   - Copie sua API key
   - Execute: `whispo-silencioso.vbs`
   - Settings → Providers → Groq → Cole a API key
   - Settings → General → Speech-to-Text Provider → Groq

3. **Teste:**
   - Segure `Ctrl` + fale + solte `Ctrl`
   - O texto aparecerá automaticamente!

#### Opção 2: Compilar do Zero

Veja instruções completas em [`WINDOWS_SETUP.md`](WINDOWS_SETUP.md)

### 📋 Requisitos

- ✅ Windows 10/11
- ✅ Node.js 18+
- ✅ pnpm (instalado automaticamente)
- ⚠️ **Apenas para compilação:** Rust + C++ Build Tools

### 🎯 Como Usar

**1. Lançar aplicação:**

- Duplo clique em `Whispo` (atalho do Desktop)
- Ou execute `whispo-silencioso.vbs`

**2. Ditar texto:**

- Abra qualquer aplicativo (Word, Email, Chat, etc.)
- Pressione e **segure** `Ctrl`
- Fale normalmente
- **Solte** `Ctrl` quando terminar
- Aguarde 1-2 segundos → texto aparece!

**3. Configurar (primeira vez):**

- Clicar no ícone da bandeja → Settings
- Providers → Adicionar API Key
- General → Escolher provider padrão

### ⚙️ Configurações

**Providers de Transcrição:**

- **Groq** (Recomendado) - Grátis, rápido, Whisper-v3
- **OpenAI** - Whisper oficial, ~$0.006/min
- **Gemini** - Alternativa Google

**Atalhos:**

- Hold Ctrl (padrão) - Segura para gravar
- Ctrl+/ - Aperta para iniciar/parar

**Pós-Processamento:**

- Correção automática de gramática
- Formatação de pontuação
- Personalizável via prompt

### 🆘 Solução de Problemas

**Erro: "Unauthorized" ou "Invalid API Key"**

- Verifique se copiou a chave completa
- Groq: chave deve começar com `gsk_`
- OpenAI: chave deve começar com `sk-`

**Terminal fica aparecendo:**

- Use `whispo-silencioso.vbs` ao invés de `whispo.bat`
- Atualize o atalho do Desktop se necessário

**Transcrição não funciona:**

- Verifique conexão com internet
- Confirme que API key está configurada
- Settings → General → Speech-to-Text Provider

**Para mais detalhes:** Veja [`WINDOWS_SETUP.md`](WINDOWS_SETUP.md)

### 📝 Arquivos Importantes

```
whispo-windows/
├── whispo.bat                 # Launcher com PATH config
├── whispo-silencioso.vbs      # Launcher silencioso
├── resources/bin/
│   └── whispo-rs.exe          # Motor de áudio Rust (compilado)
├── WINDOWS_SETUP.md           # Guia completo de instalação
└── CHANGELOG.md               # Histórico de alterações
```

### 🤝 Contribuindo

Contribuições são bem-vindas! Especialmente:

- Melhorias no processo de instalação Windows
- Correção de bugs Windows-específicos
- Documentação

### 📄 Licença

[AGPL-3.0](./LICENSE) - Mesma licença do projeto original

---

## English

### 🎙️ About

**Whispo** is an AI-powered dictation tool that automatically transcribes your voice to text in any application. This is a Windows-optimized version with silent launcher and auto-start configuration.

**Based on:** [egoist/whispo](https://github.com/egoist/whispo) v0.1.7

### ✨ Features

- ✅ **Voice Dictation**: Hold `Ctrl` to record, release to transcribe
- ✅ **Auto-Insert**: Text appears automatically in active app
- ✅ **Multi-Provider**: OpenAI, Groq (free), or Gemini
- ✅ **Post-Processing**: LLMs can improve grammar/punctuation
- ✅ **Silent Launcher**: Runs without terminal window
- ✅ **Auto-Start**: Launches with Windows automatically
- ✅ **Offline-First**: Data stored locally

### 🚀 Quick Start

#### Option 1: Use Pre-Compiled Version (Recommended)

1. **Clone this repository:**

   ```bash
   git clone https://github.com/giand/whispo-windows.git
   cd whispo-windows
   ```

2. **Configure API Key (Groq - Free):**
   - Create account at: <https://console.groq.com>
   - Copy your API key
   - Run: `whispo-silencioso.vbs`
   - Settings → Providers → Groq → Paste API key
   - Settings → General → Speech-to-Text Provider → Groq

3. **Test:**
   - Hold `Ctrl` + speak + release `Ctrl`
   - Text will appear automatically!

#### Option 2: Build from Source

See complete instructions in [`WINDOWS_SETUP.md`](WINDOWS_SETUP.md)

### 📋 Requirements

- ✅ Windows 10/11
- ✅ Node.js 18+
- ✅ pnpm (installed automatically)
- ⚠️ **For compilation only:** Rust + C++ Build Tools

### 🎯 How to Use

**1. Launch application:**

- Double-click `Whispo` (Desktop shortcut)
- Or run `whispo-silencioso.vbs`

**2. Dictate text:**

- Open any application (Word, Email, Chat, etc.)
- Press and **hold** `Ctrl`
- Speak normally
- **Release** `Ctrl` when finished
- Wait 1-2 seconds → text appears!

**3. Configure (first time):**

- Click tray icon → Settings
- Providers → Add API Key
- General → Choose default provider

### ⚙️ Configuration

**Transcription Providers:**

- **Groq** (Recommended) - Free, fast, Whisper-v3
- **OpenAI** - Official Whisper, ~$0.006/min
- **Gemini** - Google alternative

**Shortcuts:**

- Hold Ctrl (default) - Hold to record
- Ctrl+/ - Press to start/stop

**Post-Processing:**

- Auto grammar correction
- Punctuation formatting
- Customizable via prompt

### 🆘 Troubleshooting

**Error: "Unauthorized" or "Invalid API Key"**

- Check if you copied the complete key
- Groq: key must start with `gsk_`
- OpenAI: key must start with `sk_`

**Terminal window keeps appearing:**

- Use `whispo-silencioso.vbs` instead of `whispo.bat`
- Update Desktop shortcut if needed

**Transcription doesn't work:**

- Check internet connection
- Confirm API key is configured
- Settings → General → Speech-to-Text Provider

**For more details:** See [`WINDOWS_SETUP.md`](WINDOWS_SETUP.md)

### 📝 Important Files

```
whispo-windows/
├── whispo.bat                 # Launcher with PATH config
├── whispo-silencioso.vbs      # Silent launcher
├── resources/bin/
│   └── whispo-rs.exe          # Rust audio engine (compiled)
├── WINDOWS_SETUP.md           # Complete installation guide
└── CHANGELOG.md               # Change history
```

### 🤝 Contributing

Contributions are welcome! Especially:

- Windows installation process improvements
- Windows-specific bug fixes
- Documentation

### 📄 License

[AGPL-3.0](./LICENSE) - Same license as original project

---

**Made with ❤️ for Windows users** | Based on [egoist/whispo](https://github.com/egoist/whispo)
