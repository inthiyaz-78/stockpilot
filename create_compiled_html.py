with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('app.js', 'r', encoding='utf-8') as f:
    compiled_js = f.read()

# Replace the babel script with the compiled JS as module
start = html.find('<script type="text/babel">')
end = html.find('</script>', start)

if start >= 0 and end >= 0:
    # Use type="module" to support ES imports
    new_html = html[:start] + '<script type="module">\n' + compiled_js + '\n</script>' + html[end+9:]
    with open('index_compiled.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print('Created index_compiled.html with type=module')
else:
    print('Could not find babel script')