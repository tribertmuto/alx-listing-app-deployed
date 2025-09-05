# Deployment Script for ALX Listing App

# Set error handling
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting ALX Listing App Deployment" -ForegroundColor Cyan
Write-Host "-----------------------------------"

# 1. Check for Node.js
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# 2. Install dependencies
Write-Host "`n🔧 Installing dependencies..." -ForegroundColor Cyan
try {
    npm install
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

# 3. Create production build
Write-Host "`n🔨 Creating production build..." -ForegroundColor Cyan
try {
    npm run build
    Write-Host "✅ Production build created successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Build failed" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

# 4. Check for Vercel CLI
Write-Host "`n🔍 Checking Vercel CLI..." -ForegroundColor Cyan
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI version: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "ℹ️ Vercel CLI not found, installing..." -ForegroundColor Yellow
    try {
        npm install -g vercel
        Write-Host "✅ Vercel CLI installed successfully" -ForegroundColor Green
    } catch {
        Write-Host "❌ Failed to install Vercel CLI" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
        exit 1
    }
}

# 5. Deploy to Vercel
Write-Host "`n🚀 Deploying to Vercel..." -ForegroundColor Cyan
try {
    vercel --prod --confirm
    Write-Host "`n🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "Your app is now live at: https://alx-listing-app-deployed.vercel.app" -ForegroundColor Green
} catch {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

# 6. Run tests
Write-Host "`n🧪 Running tests..." -ForegroundColor Cyan
try {
    npm test
    Write-Host "✅ Tests passed successfully" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Some tests failed" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Yellow
}

Write-Host "`n✨ Deployment process completed! ✨" -ForegroundColor Cyan
