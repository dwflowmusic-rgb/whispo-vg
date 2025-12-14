# Build script for Windows (PowerShell)
# Este script compila o módulo Rust whispo-rs

$ErrorActionPreference = "Stop"

# Cria diretório de saída se não existir
if (-not (Test-Path "resources/bin")) {
    New-Item -ItemType Directory -Path "resources/bin" -Force
}

# Verifica se o exe já existe e está atualizado
$targetExe = "resources/bin/whispo-rs.exe"
if (Test-Path $targetExe) {
    Write-Host "whispo-rs.exe already exists, skipping Rust build." -ForegroundColor Yellow
    exit 0
}

# Entra no diretório do projeto Rust
Push-Location whispo-rs

try {
    # Compila em modo release
    cargo build -r
    
    # Copia o executável para resources/bin
    Copy-Item "target/release/whispo-rs.exe" "../resources/bin/whispo-rs.exe" -Force
    
    Write-Host "Build completed successfully!" -ForegroundColor Green
}
catch {
    Write-Host "Warning: Could not copy whispo-rs.exe (file may be in use). Using existing file." -ForegroundColor Yellow
}
finally {
    Pop-Location
}

