const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment to Vercel...');

// 1. Install dependencies
console.log('\n🔧 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

// 2. Create production build
console.log('\n🔨 Creating production build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Production build created successfully');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// 3. Check if Vercel CLI is installed
try {
  console.log('\n🔍 Checking Vercel CLI...');
  execSync('vercel --version', { stdio: 'pipe' });
  console.log('✅ Vercel CLI is installed');
} catch (error) {
  console.log('⚠️  Vercel CLI not found, installing...');
  try {
    execSync('npm install -g vercel', { stdio: 'inherit' });
    console.log('✅ Vercel CLI installed successfully');
  } catch (installError) {
    console.error('❌ Failed to install Vercel CLI');
    process.exit(1);
  }
}

// 4. Deploy to Vercel
console.log('\n🚀 Deploying to Vercel...');
try {
  execSync('vercel --prod --confirm', { stdio: 'inherit' });
  console.log('\n🎉 Deployment successful!');
} catch (error) {
  console.error('❌ Deployment failed');
  process.exit(1);
}
