with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old = '<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">'
new = '<div className="tilt-card glass-card rounded-2xl shadow-layered border border-slate-100 dark:border-slate-800 overflow-hidden bento-item">'

content = content.replace(old, new)

with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced', content.count(old), 'occurrences')