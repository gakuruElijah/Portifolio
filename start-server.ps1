# Simple PowerShell script to start a local web server
# Run this to preview your portfolio locally

Write-Host "🚀 Starting local development server..." -ForegroundColor Cyan
Write-Host ""

# Check if Python is installed
$pythonVersion = python --version 2>&1

if ($pythonVersion -match "Python") {
    Write-Host "✓ Python detected: $pythonVersion" -ForegroundColor Green
    Write-Host ""
    Write-Host "📂 Serving portfolio at:" -ForegroundColor Yellow
    Write-Host "   http://localhost:8000" -ForegroundColor Green
    Write-Host ""
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
    Write-Host ""
    
    # Start Python HTTP server
    python -m http.server 8000
}
else {
    Write-Host "❌ Python not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternative options:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Install Python:" -ForegroundColor Cyan
    Write-Host "   Download from https://www.python.org/downloads/" -ForegroundColor White
    Write-Host ""
    Write-Host "2. Use VS Code Live Server:" -ForegroundColor Cyan
    Write-Host "   - Install 'Live Server' extension in VS Code" -ForegroundColor White
    Write-Host "   - Right-click index.html → 'Open with Live Server'" -ForegroundColor White
    Write-Host ""
    Write-Host "3. Or simply open index.html in your browser:" -ForegroundColor Cyan
    Write-Host "   - Double-click index.html" -ForegroundColor White
    Write-Host "   - Most features will work without a server" -ForegroundColor White
    Write-Host ""
    
    # Open the file in default browser anyway
    Write-Host "Opening index.html in your default browser..." -ForegroundColor Yellow
    Start-Process "index.html"
}
