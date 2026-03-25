import os
import re

src_dir = os.path.join(os.getcwd(), 'src')

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            try:
                with open(p, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                # Replace fontFamily: "...", or fontFamily: '...',
                content = re.sub(r'fontFamily:\s*(?:"[^"]*"|\'[^\']*\')\s*,?\s*', '', content)
                # Cleanup leftover commas
                content = re.sub(r'\{\s*,', '{ ', content)
                content = re.sub(r',\s*\}', ' }', content)
                content = re.sub(r',\s*,', ', ', content)
                
                with open(p, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f"Processed: {p}")
            except Exception as e:
                print(f"Error reading {p}: {e}")

css_path = os.path.join(src_dir, 'styles', 'global.css')
if os.path.exists(css_path):
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()
    css = re.sub(r"font-family:\s*'Space Mono',\s*monospace;", "", css)
    css = re.sub(r"font-family:\s*'Syne',\s*sans-serif;", "", css)
    # Just in case there are single quotes vs double quotes differences
    css = re.sub(r'font-family:\s*"Space Mono",\s*monospace;', "", css)
    css = re.sub(r'font-family:\s*"Syne",\s*sans-serif;', "", css)
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css)
    print("Processed: global.css")

app_path = os.path.join(src_dir, 'App.jsx')
if os.path.exists(app_path):
    with open(app_path, 'r', encoding='utf-8') as f:
        app = f.read()
    app = re.sub(
        r'<link href="https://fonts\.googleapis\.com/css2\?family=Syne[^"]+" rel="stylesheet" />',
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />',
        app
    )
    with open(app_path, 'w', encoding='utf-8') as f:
        f.write(app)
    print("Processed: App.jsx LINK")

print("All done!")
