with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

print("Total size:", len(content))

idx = content.find('<script type="text/babel">')
if idx >= 0:
    end = content.find('</script>', idx)
    if end >= 0:
        jsx = content[idx+len('<script type="text/babel">'):end]
        print("JSX length:", len(jsx))
else:
    print("No babel script found")