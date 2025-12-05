Set WshShell = CreateObject("WScript.Shell")
' Obtém o diretório do próprio script VBS
ScriptDir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
' Executa o whispo.bat na mesma pasta, sem mostrar janela (0 = oculto)
WshShell.Run """" & ScriptDir & "\whispo.bat""", 0, False
Set WshShell = Nothing
