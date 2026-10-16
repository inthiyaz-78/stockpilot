import os
base = r'C:\Users\inthi\Documents\Default Project'

# Step 1: Extract JSX from index.html
with open(os.path.join(base, 'index.html'), 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<script type="text/babel">')
end = content.find('</script>', start)
if start < 0 or end < 0:
    print('ERROR: Could not find babel script')
    exit(1)

jsx = content[start + len('<script type="text/babel">'):end]
with open(os.path.join(base, 'app.jsx'), 'w', encoding='utf-8') as f:
    f.write(jsx)
print('Step 1: Extracted JSX:', len(jsx), 'chars')

# Step 2: Transpile JSX to plain JS (preset-react only, no module transform)
import subprocess
result = subprocess.run(
    ['npx', 'babel', 'app.jsx', '--out-file', 'app.js',
     '--presets', '@babel/preset-react', '--no-babelrc', '--source-type=script'],
    cwd=base, capture_output=True, text=True
)
if result.returncode != 0:
    print('Babel error:', result.stderr[:500])
    exit(1)
print('Step 2: Transpiled to app.js:', os.path.getsize(os.path.join(base, 'app.js')), 'bytes')

# Step 3: Build production index.html (no babel, loads app.js directly)
# Remove the babel script tag and babel standalone script from HTML
html = content
# Remove babel standalone script
html = html.replace('<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>', '')
# Replace babel script with reference to app.js
html = html.replace('<script type="text/babel">' + jsx + '</script>', '<script src="app.js"></script>')

with open(os.path.join(base, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(html)
print('Step 3: Production index.html:', len(html), 'chars')
print('Done! Push to deploy.')