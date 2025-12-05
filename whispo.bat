@echo off
REM ============================================
REM Whispo - AI Powered Dictation App
REM Launcher Script
REM ============================================

REM Muda para o diretório do script
cd /d "%~dp0"

REM Recarrega PATH para incluir Cargo/Rust se necessário
set PATH=%PATH%;%USERPROFILE%\.cargo\bin

REM Título da janela
title Whispo - AI Dictation

REM Executa o Electron em modo preview (produção)
echo Iniciando Whispo...
echo.
start "Whispo" /B node node_modules\electron-vite\bin\electron-vite.js preview

REM Aguarda um pouco para garantir que iniciou
timeout /t 2 /nobreak >nul

echo Whispo iniciado com sucesso!
echo Feche esta janela se desejar.
pause
