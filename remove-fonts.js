const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function fixJSX(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    try {
      if (fs.statSync(p).isDirectory()) {
        fixJSX(p);
      } else if (p.endsWith('.jsx')) {
        let c = fs.readFileSync(p, 'utf8');
        c = c.replace(/fontFamily:\s*(?:"[^"]*"|'[^']*')\s*,?\s*/g, '');
        c = c.replace(/\{\s*,/g, '{ ');
        c = c.replace(/,\s*\}/g, ' }');
        c = c.replace(/,\s*,/g, ', ');
        fs.writeFileSync(p, c);
        console.log("Processed:", p);
      }
    } catch (e) {
      console.log("Error processing:", p, e.message);
    }
  }
}

fixJSX(srcDir);

const cssPath = path.join(srcDir, 'styles', 'global.css');
try {
  let css = fs.readFileSync(cssPath, 'utf8');
  css = css.replace(/font-family:\s*'Space Mono',\s*monospace;/g, '');
  css = css.replace(/font-family:\s*'Syne',\s*sans-serif;/g, '');
  fs.writeFileSync(cssPath, css);
  console.log("Processed:", cssPath);
} catch (e) {
  console.log("Error processing CSS:", cssPath, e.message);
}

const appPath = path.join(srcDir, 'App.jsx');
try {
  let app = fs.readFileSync(appPath, 'utf8');
  // Replacing just the font URL part
  app = app.replace(
    /href="https:\/\/fonts\.googleapis\.com\/css2\?family=Syne[^"]+"/, 
    'href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"'
  );
  fs.writeFileSync(appPath, app);
  console.log("Processed:", appPath);
} catch (e) {
  console.log("Error processing App:", appPath, e.message);
}

console.log("Done");
