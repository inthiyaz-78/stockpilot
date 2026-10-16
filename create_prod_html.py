with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open(r'C:\Users\inthi\Documents\Default Project\app.js', 'r', encoding='utf-8') as f:
    compiled_js = f.read()

# Remove the babel script and babel standalone script
# Find the babel script
start = html.find('<script type="text/babel">')
end = html.find('</script>', start)

babel_standalone_start = html.find('<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>')
babel_standalone_end = babel_standalone_start + len('<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>')

if start >= 0 and end >= 0:
    # Remove babel standalone script first
    if babel_standalone_start >= 0:
        html = html[:babel_standalone_start] + html[babel_standalone_end:]
        if babel_standalone_start < start:
            start -= (babel_standalone_end - babel_standalone_start)
            end -= (babel_standalone_end - babel_standalone_start)
    
    # Replace babel script with compiled JS
    new_html = html[:start] + '<script>\n' + compiled_js + '\n</script>' + html[end+9:]
    
    with open(r'C:\Users\inthi\Documents\Default Project\index_prod.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print('Created index_prod.html:', len(new_html))
else:
    print('Could not find babel script')