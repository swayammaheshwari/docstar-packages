const fs = require('fs');
const path = require('path');

// Simple build script to create minified version
function minifyJS(code) {
    // Basic minification - remove comments and extra whitespace
    return code
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\/\/.*$/gm, '') // Remove line comments
        .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
        .replace(/;\s*}/g, ';}') // Remove space before closing braces
        .replace(/{\s*/g, '{') // Remove space after opening braces
        .replace(/}\s*/g, '}') // Remove space after closing braces
        .trim();
}

// Read source file
const srcPath = path.join(__dirname, 'src', 'docstar-search.js');
const distDir = path.join(__dirname, 'dist');
const distPath = path.join(distDir, 'docstar-search.min.js');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Read and process the source file
const sourceCode = fs.readFileSync(srcPath, 'utf8');
const minifiedCode = minifyJS(sourceCode);

// Write minified version
fs.writeFileSync(distPath, minifiedCode);

// Also copy the original for development
const devPath = path.join(distDir, 'docstar-search.js');
fs.writeFileSync(devPath, sourceCode);

console.log('Build completed successfully!');
console.log(`- Development version: ${devPath}`);
console.log(`- Minified version: ${distPath}`);
console.log(`- Original size: ${sourceCode.length} bytes`);
console.log(`- Minified size: ${minifiedCode.length} bytes`);
console.log(`- Compression: ${Math.round((1 - minifiedCode.length / sourceCode.length) * 100)}%`);
