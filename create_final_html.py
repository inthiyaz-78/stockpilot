with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open(r'C:\Users\inthi\Documents\Default Project\app.js', 'r', encoding='utf-8') as f:
    compiled_js = f.read()

# Replace the babel script with the compiled JS as a regular script
start = html.find('<script type="text/babel">')
end = html.find('</script>', start)

if start >= 0 and end >= 0:
    # Remove the babel standalone script too
    babel_start = html.find('<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>')
    if babel_start >= 0:
        babel_end = babel_start + len('<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>')
        # Remove babel script
        html = html[:babel_start] + html[babel_end:]
        # Adjust start/end positions
        if babel_start < start:
            start -= (babel_end - babel_start)
            end -= (babel_end - babel_start)

    # Replace babel script with compiled JS
    new_html = html[:start] + '<script>\n' + compiled_js + '\n</script>' + html[end+9:]
    
    with open(r'C:\Users\inthi\Documents\Default Project\index_compiled.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print('Created index_compiled.html')
else:
    print('Could not find babel script')