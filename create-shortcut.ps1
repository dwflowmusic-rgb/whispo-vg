$WshShell = New-Object -comObject WScript.Shell
$DesktopPath = [Environment]::GetFolderPath("Desktop")
$ShortcutPath = Join-Path $DesktopPath "Juris Transcritor.lnk"
$Target = Join-Path $PWD "juris-transcritor-fast-silencioso.vbs"
$Icon = Join-Path $PWD "resources\trayIcon.ico"

$Shortcut = $WshShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = $Target
$Shortcut.IconLocation = $Icon
$Shortcut.Description = "Juris Transcritor v1.2.1 - AI Transcription"
$Shortcut.Save()

Write-Host "Shortcut created at: $ShortcutPath"
