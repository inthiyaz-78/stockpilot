import os, subprocess
base = r'C:\Users\inthi\Documents\Default Project'
npx = os.path.join(base, 'node_modules', '.bin', 'babel.cmd')
if not os.path.exists(npx):
    npx = os.path.join(base, 'node_modules', '.bin', 'babel')
result = subprocess.run(
    [npx, 'app.jsx', '--out-file', 'app.js',
     '--presets', '@babel/preset-react', '--no-babelrc', '--source-type=script'],
    cwd=base, capture_output=True, text=True
)
print('stdout:', result.stdout)
print('stderr:', result.stderr)
print('returncode:', result.returncode)