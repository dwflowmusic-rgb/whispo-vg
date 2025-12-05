# Changelog

All notable changes to Whispo Windows project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.0] - 2025-12-04

### Added

- **Windows Silent Launcher**: `whispo-silencioso.vbs` script that launches Whispo without showing terminal window
- **Windows Batch Launcher**: `whispo.bat` script with automatic Rust/Cargo PATH configuration
- **Auto-start Configuration**: Shortcut in Windows Startup folder for automatic launch on system boot
- **Compiled Rust Binary**: Pre-compiled `whispo-rs.exe` included in `resources/bin/` for Windows x64
- **Comprehensive Documentation**: Portuguese and English README with Windows-specific setup instructions
- **Windows Setup Guide**: Detailed `WINDOWS_SETUP.md` with step-by-step installation process
- **Enhanced .gitignore**: Windows-specific patterns (Thumbs.db, desktop.ini) and IDE exclusions

### Changed

- Modified original `build-rs` shell script workflow to manual Rust compilation for Windows compatibility
- Configured Groq API as default transcription provider (free tier)
- Updated launcher shortcuts to use silent VBS script instead of BAT (better UX)

### Fixed

- **Path Issues**: Resolved Rust/Cargo PATH not available in Windows sessions
- **Terminal Window**: Eliminated persistent console window during application runtime
- **Electron Installation**: Manually executed postinstall script to fix binary download failure
- **Application Structure**: Fixed module path issues in packaged application (out/main/index.js)
- **7-Zip Path Bug**: Workaround for electron-builder failure with special characters in path ("Área")

### Technical

- **Stack**: Electron 31.0.2, TypeScript, React, Tailwind CSS, Rust (whispo-rs)
- **Dependencies**: Successfully installed via pnpm despite node-gyp error in electron-panel-window
- **Build Process**: electron-vite build completed in ~2.7s for production bundle
- **Rust Compilation**: Manual cargo build --release completed in 30.56s

### Known Issues

- `@egoist/electron-panel-window` module fails to compile with node-gyp (non-blocking)
- electron-builder fails when project path contains special characters (Área)
- Requires manual Rust compilation on first setup (not automated)

### Configuration

- Supports multiple transcription providers: OpenAI, Groq (default), Gemini
- Transcription via OpenAI Whisper API
- Optional post-processing with LLMs (GPT-4o-mini, Llama-3.1-70b, Gemini)
- Customizable shortcut: Hold Ctrl (default) or Ctrl+/ toggle

---

## Upstream Reference

This is a Windows-customized fork of [egoist/whispo](https://github.com/egoist/whispo) v0.1.7.

Original project: AI-powered dictation tool for macOS and Windows.

Windows-specific enhancements focus on silent execution, auto-start, and seamless Windows integration.
