with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<script type="text/babel">')
if start >= 0:
    end = content.find('</script>', start)
    if end >= 0:
        jsx = content[start+len('<script type="text/babel">'):end]
        with open('app.jsx', 'w', encoding='utf-8') as f:
            f.write(jsx)
        print('Extracted JSX:', len(jsx), 'chars')
    else:
        print('End tag not found')
else:
    print('Start tag not found')