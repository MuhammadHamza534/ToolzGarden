import os
import json
import re

with open('faqs.json', 'r', encoding='utf-8') as f:
    faqs = json.load(f)

directory = "d:/ToolzGarden/tools"

for filename, faq_items in faqs.items():
    filepath = os.path.join(directory, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. JSON-LD schema
    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    }
    for item in faq_items:
        schema["mainEntity"].append({
            "@type": "Question",
            "name": item["q"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item["a"]
            }
        })
    schema_str = json.dumps(schema, separators=(',', ':'))
    schema_tag = f'<script type="application/ld+json">\n{schema_str}\n</script>'
    
    # replace existing
    if 'FAQPage' in content:
        content = re.sub(r'<script type="application/ld\+json">\s*\{.*?FAQPage.*?</script>', lambda m: schema_tag, content, flags=re.DOTALL)
    else:
        content = content.replace('</head>', f'{schema_tag}\n</head>')

    # 2. HTML content
    faq_html = '<h2>Frequently Asked Questions</h2>\n<section class="faq-section" style="padding:1rem 0;border-top:none">\n<div class="faq-list">\n'
    for item in faq_items:
        faq_html += f'  <div class="faq-item">\n    <button class="faq-question">{item["q"]} <span class="faq-icon">+</span></button>\n    <div class="faq-answer"><p>{item["a"]}</p></div>\n  </div>\n'
    faq_html += '</div>\n</section>\n'

    if '<h2>Frequently Asked Questions</h2>' in content:
        # Some files have <details>, some have <section>
        # Let's use a regex to replace everything from <h2>Frequently Asked Questions</h2> to the next closing tag of the main container.
        # We will look for <h2>Frequently Asked Questions</h2> followed by ANY characters, up to the FIRST occurrence of a major boundary.
        # Major boundaries: </main>, <p style="margin:1rem 0, <footer>, </div>\s*<!-- end container -->
        
        boundary_pattern = r'(?=(</main>|<p style="margin:1rem 0|<footer>|</div>\s*<!-- end container -->|</div>\s*<p style="margin|</div>\s*<footer|</div>\s*</div>))'
        
        # We replace the h2 and the matched content with faq_html
        content = re.sub(r'<h2>Frequently Asked Questions</h2>.*?' + boundary_pattern, lambda m: faq_html, content, flags=re.DOTALL | re.IGNORECASE)
    else:
        # inject at the end
        if '</div><!-- end container -->' in content:
            content = content.replace('</div><!-- end container -->', f'{faq_html}\n</div><!-- end container -->')
        elif '</main>' in content:
            content = content.replace('</main>', f'{faq_html}\n</main>')
        elif '<p style="margin:1rem 0;font-size:.9rem;color:var(--text-secondary)">' in content:
            content = content.replace('<p style="margin:1rem 0;font-size:.9rem;color:var(--text-secondary)">', f'{faq_html}\n<p style="margin:1rem 0;font-size:.9rem;color:var(--text-secondary)">')
        else:
            print(f"Warning: Could not find HTML injection point for {filename}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filename}")
