# Script para iniciar o servidor de desenvolvimento
# Encerra processos Node.js existentes na porta 3002 antes de iniciar

Write-Host "Limpando cache do Next.js..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "Cache limpo!" -ForegroundColor Green
}

Write-Host "Verificando processos na porta 3002..." -ForegroundColor Yellow

# Encerra processos Node.js existentes
$processes = Get-NetTCPConnection -LocalPort 3002 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($processes) {
    foreach ($pid in $processes) {
        Write-Host "Encerrando processo PID $pid..." -ForegroundColor Yellow
        Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 2
}

Write-Host "Iniciando servidor de desenvolvimento..." -ForegroundColor Green
npm run dev
