import os
base = r'C:\Users\inthi\Documents\Default Project'

with open(os.path.join(base, 'index.html'), 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSX
start = content.find('<script type="text/babel">')
end = content.find('</script>', start)
jsx = content[start + len('<script type="text/babel">'):end]

# Remove babel standalone script
content = content.replace('<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>', '')

# Replace babel script with reference to pre-transpiled app.js
content = content.replace('<script type="text/babel">' + jsx + '</script>', '<script src="app.js"></script>')

with open(os.path.join(base, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(content)

print('Production index.html created:', len(content), 'chars')
print('app.js size:', os.path.getsize(os.path.join(base, 'app.js')), 'bytes')