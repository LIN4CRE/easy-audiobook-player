const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const required = ['index.html', 'src/app.js', 'src/styles.css', 'assets/banner.jpg', 'assets/banner.svg', 'assets/icon.svg', 'README.md', 'LICENSE'];
for (const file of required) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) throw new Error(`Missing required file: ${file}`);
  if (!fs.statSync(fullPath).size) throw new Error(`File is empty: ${file}`);
}
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const reference of ['src/styles.css', 'src/app.js', 'assets/icon.svg', 'sleepSelect']) {
  if (!html.includes(reference)) throw new Error(`index.html does not reference ${reference}`);
}
console.log('Smoke test passed: all files and sleep timer verified.');
