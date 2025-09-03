const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

try {
  if (!fs.existsSync(distDir)) {
    console.error('dist folder not found. Run the build first.');
    process.exit(1);
  }
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('Created dist/404.html for SPA fallback.');
} catch (err) {
  console.error('Failed to create 404.html:', err);
  process.exit(1);
} 