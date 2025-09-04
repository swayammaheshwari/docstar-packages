const { execSync } = require('child_process');
const path = require('path');

function buildScript() {
  console.log('🔨 Building search-sdk...');
  
  const inputPath = path.resolve('search-sdk/search-sdk.js');
  const outputPath = path.resolve('search-sdk.min.js');
  
  try {
    // Install terser if not available
    try {
      execSync('npm list terser', { stdio: 'ignore' });
    } catch {
      console.log('Installing terser...');
      execSync('npm install terser', { stdio: 'inherit' });
    }
    
    // Minify the script
    execSync(`npx terser ${inputPath} --compress --mangle --output ${outputPath}`, {
      stdio: 'inherit'
    });
    
    console.log(`✅ Built search-sdk.min.js`);
  } catch (error) {
    console.error(`❌ Failed to build search-sdk:`, error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  buildScript();
}

module.exports = { buildScript };
