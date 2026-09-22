# Vercel Deployment Script for farm-ts application (PowerShell)
# Usage: .\deploy.ps1 [-Prod]

param(
    [switch]$Prod
)

Write-Host "🚀 Farm-TS Vercel Deployment Script" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan

# Check if vercel CLI is installed
try {
    vercel --version | Out-Null
} catch {
    Write-Host "❌ Vercel CLI is not installed." -ForegroundColor Red
    Write-Host "Install it with: npm install -g vercel" -ForegroundColor Yellow
    exit 1
}

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Not in a git repository. Please initialize git first." -ForegroundColor Red
    exit 1
}

# Check for uncommitted changes
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  You have uncommitted changes. Consider committing them first." -ForegroundColor Yellow
    $continue = Read-Host "Do you want to continue? (y/N)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        exit 1
    }
}

# Build frontend locally to check for errors
Write-Host "🔨 Building frontend..." -ForegroundColor Green
Set-Location frontend
npm ci
npm run build
Set-Location ..

Write-Host "✅ Frontend build successful!" -ForegroundColor Green

# Check if .env exists and warn about environment variables
if (-not (Test-Path "backend\.env")) {
    Write-Host "⚠️  No .env file found in backend/. Make sure to set environment variables in Vercel." -ForegroundColor Yellow
}

Write-Host "📝 Pre-deployment checklist:" -ForegroundColor Blue
Write-Host "   - MongoDB Atlas cluster set up ✓"
Write-Host "   - Environment variables configured in Vercel ✓" 
Write-Host "   - CORS_ORIGINS updated with your domain ✓"
Write-Host ""

# Deploy based on parameter
if ($Prod) {
    Write-Host "🚀 Deploying to production..." -ForegroundColor Magenta
    vercel --prod
} else {
    Write-Host "🧪 Deploying to preview..." -ForegroundColor Yellow
    vercel
}

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "📋 Next steps:" -ForegroundColor Blue
Write-Host "   1. Test your API endpoints"
Write-Host "   2. Update CORS_ORIGINS if this is your first deployment"
Write-Host "   3. Check Vercel dashboard for any function errors"