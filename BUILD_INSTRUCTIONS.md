# Instruções de Build - Juris Transcritor

Como o processo automático de download das ferramentas de build falhou (provavelmente por firewall ou instabilidade de rede ao baixar `winCodeSign`), siga estes passos para gerar o instalador manualmente.

## Pré-requisitos

Certifique-se de que sua internet está estável para o primeiro build.

## Como Gerar o Instalador

Abra o terminal (PowerShell) na pasta do projeto e execute:

```powershell
# 1. Limpar tentativas anteriores (opcional mas recomendado)
# apague a pasta 'dist' se existir

# 2. Instalar dependências (garantia)
npm install

# 3. Gerar o Instalador
npm run build:win
```

Se tudo der certo, o arquivo final estará em:
`dist/Juris Transcritor Setup 1.2.0.exe`

## Como Testar sem Instalar (Modo Desenvolvimento)

Você pode usar todas as funções novas agora mesmo, sem gerar o .exe:

```powershell
npm run dev
```

Isso abrirá o aplicativo com:

- ✅ Splash Screen
- ✅ Correção do "como base"
- ✅ Botões de Ajuda
- ✅ Seleção de Modelo Gemini

---
**Nota sobre Erro `winCodeSign`:**
Se continuar dando erro de download, você pode tentar baixar manualmente os arquivos necessários do repositório `electron-userland/electron-builder-binaries` no GitHub e colocar no cache do electron-builder, mas geralmente tentar novamente mais tarde resolve.
