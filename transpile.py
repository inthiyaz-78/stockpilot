import re

with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract the babel script content
start = html.find('<script type="text/babel">')
end = html.find('</script>', start)

if start >= 0 and end >= 0:
    jsx_content = html[start + len('<script type="text/babel">'):end]
    with open(r'C:\Users\inthi\Documents\Default Project\app.jsx', 'w', encoding='utf-8') as f:
        f.write(jsx_content)
    print(f'Extracted JSX: {len(jsx_content)} chars')
else:
    print('Could not find babel script')
    exit(1)