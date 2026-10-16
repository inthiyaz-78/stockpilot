import re

with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"'
matches = list(re.finditer(pattern, content))
print('Found:', len(matches))
for m in matches[:5]:
    start = max(0, m.start()-30)
    end = min(len(content), m.end()+50)
    print(repr(content[start:end]))
    print('---')

# Replace
new_content = re.sub(pattern, 'className="tilt-card glass-card rounded-2xl shadow-layered border border-slate-100 dark:border-slate-800 overflow-hidden bento-item"', content)

with open(r'C:\Users\inthi\Documents\Default Project\index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Replaced:', len(matches), 'occurrences')