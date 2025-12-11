import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

type HelpModule = "gemini" | "openai" | "groq"

const HELP_CONTENT: Record<HelpModule, { title: string; content: React.ReactNode }> = {
    gemini: {
        title: "Como configurar o Google Gemini",
        content: (
            <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                    O <strong>Gemini</strong> é a IA do Google, rápida e eficiente. O plano gratuito é excelente para transcrições.
                </p>
                <ol className="list-decimal pl-4 space-y-2">
                    <li>
                        Acesse o <a href="https://aistudio.google.com/app/apikey" target="_blank" className="text-primary underline">Google AI Studio</a>.
                    </li>
                    <li>Faça login com sua conta Google.</li>
                    <li>Clique no botão <strong>"Create API key"</strong>.</li>
                    <li>Copie a chave gerada (começa com <code className="bg-muted px-1 rounded">AIza...</code>).</li>
                    <li>Cole no campo <strong>API Key</strong> aqui no aplicativo.</li>
                </ol>
                <p className="pt-2"><strong>Dica de Modelo:</strong> Use o <em>Flash Lite</em> para máxima velocidade ou <em>Flash</em> para maior inteligência.</p>
            </div>
        ),
    },
    openai: {
        title: "Como configurar a OpenAI (GPT)",
        content: (
            <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                    A OpenAI criou o ChatGPT. É uma IA poderosa, mas paga (você precisa de créditos na conta).
                </p>
                <ol className="list-decimal pl-4 space-y-2">
                    <li>
                        Acesse a <a href="https://platform.openai.com/api-keys" target="_blank" className="text-primary underline">Plataforma OpenAI</a>.
                    </li>
                    <li>Crie uma conta e adicione créditos de cobrança (necessário).</li>
                    <li>Vá em <strong>"Create new secret key"</strong>.</li>
                    <li>Dê um nome (ex: "Juris") e clique em Create.</li>
                    <li>Copie a chave (começa com <code className="bg-muted px-1 rounded">sk-...</code>).</li>
                    <li>Cole no campo <strong>API Key</strong> aqui no aplicativo.</li>
                </ol>
            </div>
        ),
    },
    groq: {
        title: "Como configurar a Groq",
        content: (
            <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                    A Groq é famosa por sua velocidade extrema.
                </p>
                <ol className="list-decimal pl-4 space-y-2">
                    <li>
                        Acesse o <a href="https://console.groq.com/keys" target="_blank" className="text-primary underline">Console Groq</a>.
                    </li>
                    <li>Clique em <strong>"Create API Key"</strong>.</li>
                    <li>Copie a chave gerada.</li>
                    <li>Cole no campo <strong>API Key</strong> aqui no aplicativo.</li>
                </ol>
            </div>
        ),
    }
}

export function HelpButton({ module }: { module: HelpModule }) {
    const data = HELP_CONTENT[module]

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 ml-1 text-muted-foreground hover:text-primary">
                    <QuestionMarkCircledIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{data.title}</DialogTitle>
                </DialogHeader>
                <div className="pt-2">
                    {data.content}
                </div>
            </DialogContent>
        </Dialog>
    )
}
