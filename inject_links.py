import os
import re
import random

tools_data = {
    "pdf": {
        "pdf-merge.html": "PDF Merge",
        "pdf-compress.html": "PDF Compressor",
        "pdf-split.html": "PDF Splitter",
        "pdf-page-remover.html": "PDF Page Remover",
        "pdf-to-image.html": "PDF to Image",
        "image-to-pdf.html": "Image to PDF"
    },
    "image": {
        "image-compressor.html": "Image Compressor",
        "image-resizer.html": "Image Resizer",
        "image-cropper.html": "Image Cropper",
        "bulk-downloader.html": "Image Bulk Downloader",
        "image-to-png.html": "Image to PNG",
        "image-to-jpg.html": "Image to JPG",
        "image-to-webp.html": "Image to WebP",
        "image-to-base64.html": "Image to Base64"
    },
    "text": {
        "word-counter.html": "Word Counter",
        "character-counter.html": "Character Counter",
        "case-converter.html": "Case Converter",
        "text-reverser.html": "Text Reverser",
        "text-to-slug.html": "Text to Slug Converter",
        "remove-duplicates.html": "Remove Duplicate Lines"
    },
    "data": {
        "base64-encoder.html": "Base64 Encoder",
        "url-encoder.html": "URL Encoder",
        "html-encoder.html": "HTML Encoder",
        "json-formatter.html": "JSON Formatter",
        "json-minifier.html": "JSON Minifier",
        "qr-code-generator.html": "QR Code Generator"
    },
    "finance": {
        "emi-calculator.html": "EMI Calculator",
        "loan-calculator.html": "Loan Calculator",
        "resume-builder.html": "Resume Builder"
    }
}

directory = "d:/ToolzGarden/tools"
all_tools = []
for cat_tools in tools_data.values():
    all_tools.extend(list(cat_tools.keys()))

for category, category_tools in tools_data.items():
    for filename, title in category_tools.items():
        filepath = os.path.join(directory, filename)
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Build Related Tools HTML
        related_html = '<div class="related-tools" style="margin-bottom: 2rem;">\n  <h2>Related Tools</h2>\n  <ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">\n'
        
        # Pick 3-4 other tools from the same category
        related_list = []
        for other_file, other_title in category_tools.items():
            if other_file != filename:
                related_list.append((other_file, other_title))
        
        # Balance the links by shuffling
        random.seed(filename) # deterministic shuffle based on filename
        random.shuffle(related_list)
        
        # If category is too small, grab some from another category
        if len(related_list) < 3:
            # just add some text tools
            for text_file, text_title in tools_data["text"].items():
                if text_file != filename and (text_file, text_title) not in related_list:
                    related_list.append((text_file, text_title))
                if len(related_list) >= 4:
                    break

        for i, (other_file, other_title) in enumerate(related_list[:4]):
            related_html += f'    <li><a href="{other_file}" style="color: var(--accent-primary); text-decoration: none;">{other_title}</a></li>\n'
        related_html += '  </ul>\n</div>\n'

        # Contextual and About/Contact link
        contextual_target = related_list[0]
        contextual_html = f'<p style="margin-top:1.5rem;">For more utilities, check out our <a href="{contextual_target[0]}" style="color: var(--accent-primary); text-decoration: underline;">{contextual_target[1]}</a>. If you have any questions or feature requests, feel free to <a href="../contact.html" style="color: var(--accent-primary); text-decoration: underline;">Contact Us</a> or learn more <a href="../about.html" style="color: var(--accent-primary); text-decoration: underline;">About ToolzGarden</a>.</p>\n'

        # Inject Related Tools ABOVE Frequently Asked Questions
        if '<h2>Frequently Asked Questions</h2>' in content:
            # Check if Related Tools already exists to prevent duplicate
            if '<h2>Related Tools</h2>' in content:
                # remove existing Related tools up to FAQ
                content = re.sub(r'<div class="related-tools".*?<h2>Frequently Asked Questions</h2>', related_html + '<h2>Frequently Asked Questions</h2>', content, flags=re.DOTALL)
                content = re.sub(r'<h2>Related Tools</h2>.*?<h2>Frequently Asked Questions</h2>', related_html + '<h2>Frequently Asked Questions</h2>', content, flags=re.DOTALL)
            else:
                content = content.replace('<h2>Frequently Asked Questions</h2>', related_html + '<h2>Frequently Asked Questions</h2>')
        else:
            # append at end of container
            pass # Shouldn't happen since I just added FAQs everywhere

        # Inject Contextual Links at the end of <article class="seo-content"> or similar
        # Since I'm not sure if article exists in all, let's inject it right before Related Tools
        # Actually, injecting it right before `<h2>Related Tools</h2>` is perfect!
        # wait, `related_html` was just injected.
        # So I can just prepend `contextual_html` to `related_html`.
        
        # We need to make sure we don't inject multiple contextual links if script is run twice
        if 'About ToolzGarden' in content:
            pass # already injected
        else:
            content = content.replace(related_html, contextual_html + '\n' + related_html)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Injected links for {filename}")
