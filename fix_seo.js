const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const toolsDir = path.join(__dirname, 'tools');

function getToolHtmlFiles() {
    let files = [];
    if (fs.existsSync(toolsDir)) {
        files = fs.readdirSync(toolsDir)
            .filter(f => f.endsWith('.html'))
            .map(f => path.join(toolsDir, f));
    }
    return files;
}

const htmlFiles = getToolHtmlFiles();

const relatedMap = {
    'image-compressor': ['image-resizer', 'image-to-webp'],
    'image-resizer': ['image-compressor', 'image-cropper'],
    'image-cropper': ['image-resizer', 'image-to-png'],
    'image-to-webp': ['image-compressor', 'image-to-png'],
    'image-to-png': ['image-to-jpg', 'image-to-webp'],
    'image-to-jpg': ['image-to-png', 'image-compressor'],
    'pdf-merge': ['pdf-split', 'pdf-compress'],
    'pdf-compress': ['pdf-merge', 'pdf-to-image'],
    'pdf-split': ['pdf-merge', 'pdf-page-remover'],
    'word-counter': ['character-counter', 'case-converter'],
    'json-formatter': ['json-minifier', 'base64-encoder'],
    'qr-code-generator': ['image-compressor', 'resume-builder'],
    'loan-calculator': ['emi-calculator'],
    'emi-calculator': ['loan-calculator'],
    'resume-builder': ['qr-code-generator', 'word-counter'],
    'image-to-text': ['image-compressor', 'image-to-png'],
    'youtube-thumbnail-downloader': ['image-compressor', 'bulk-downloader'],
    'meta-tag-generator': ['schema-generator', 'word-counter'],
    'schema-generator': ['meta-tag-generator', 'json-formatter'],
    'remove-metadata': ['image-compressor', 'image-resizer'],
    'image-upscaler': ['image-compressor', 'image-resizer']
};

htmlFiles.forEach(filePath => {
    try {
        const html = fs.readFileSync(filePath, 'utf8');
        const $ = cheerio.load(html, { decodeEntities: false });
        
        let fileName = path.basename(filePath);
        let pageName = fileName.replace('.html', '');
        let keyword = pageName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        // --- TASK 1: FAQ SCHEMA ---
        let faqItems = $('.faq-item');
        if (faqItems.length > 0) {
            // Check if FAQ schema already exists
            let hasFAQSchema = false;
            $('script[type="application/ld+json"]').each((i, el) => {
                if ($(el).html().includes('"@type":"FAQPage"') || $(el).html().includes('"@type": "FAQPage"')) {
                    hasFAQSchema = true;
                }
            });

            if (!hasFAQSchema) {
                let schema = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": []
                };
                faqItems.each((i, el) => {
                    let q = $(el).find('.faq-question').text().replace(/\+/g, '').trim();
                    let a = $(el).find('.faq-answer').text().trim();
                    if (q && a) {
                        schema.mainEntity.push({
                            "@type": "Question",
                            "name": q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": a
                            }
                        });
                    }
                });
                if (schema.mainEntity.length > 0) {
                    $('head').append(`\n<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>\n`);
                }
            }
        }

        // --- TASK 2: INTERNAL LINKS ---
        // We need to add links to at least 2 related pages.
        // Check if there's already a related-tools line before footer
        if ($('.related-tools-line').length === 0) {
            let rel1 = (relatedMap[pageName] && relatedMap[pageName][0]) ? relatedMap[pageName][0] : 'word-counter';
            let rel2 = (relatedMap[pageName] && relatedMap[pageName][1]) ? relatedMap[pageName][1] : 'case-converter';
            
            // Prevent linking to self
            if (rel1 === pageName) rel1 = 'character-counter';
            if (rel2 === pageName) rel2 = 'remove-duplicates';
            
            let name1 = rel1.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            let name2 = rel2.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

            let linksLine = `<div class="container related-tools-line" style="margin-top: 2rem; margin-bottom: 2rem;"><p><strong>Related Tools:</strong> <a href="${rel1}.html" style="color: var(--accent-primary); text-decoration: underline;">Free ${name1}</a> | <a href="${rel2}.html" style="color: var(--accent-primary); text-decoration: underline;">Free ${name2}</a></p></div>`;
            
            // Insert just before footer
            let footer = $('footer');
            if (footer.length > 0) {
                footer.before(linksLine);
            } else {
                $('body').append(linksLine);
            }
        }

        // --- TASK 3: HEADING STRUCTURE ---
        // 1. Exactly one H1 tag exists, contains primary keyword
        let h1s = $('h1');
        if (h1s.length === 0) {
            // No H1, create one
            let main = $('main');
            if (main.length > 0) {
                main.prepend(`<h1>${keyword}</h1>`);
            } else {
                $('body').prepend(`<h1>${keyword}</h1>`);
            }
        } else if (h1s.length > 1) {
            // More than 1 H1, downgrade others to H2
            h1s.each((i, el) => {
                if (i > 0) {
                    el.tagName = 'h2';
                }
            });
        }
        
        let firstH1 = $('h1').first();
        if (!firstH1.text().toLowerCase().includes(keyword.toLowerCase())) {
            firstH1.text(`${keyword} Online`);
        }

        // 2. Sections use H2 tags, no skipped levels
        // Very basic approach: gather all headings in document order
        let headings = $('h1, h2, h3, h4, h5, h6');
        let currentLevel = 1; // Start assuming H1 is first
        
        headings.each((i, el) => {
            let tagLevel = parseInt(el.tagName.replace('h', ''));
            
            if (tagLevel > currentLevel + 1) {
                // Skipped a level! (e.g. current is H1, tag is H3 -> change tag to H2)
                el.tagName = `h${currentLevel + 1}`;
                currentLevel = currentLevel + 1;
            } else {
                currentLevel = parseInt(el.tagName.replace('h', ''));
            }
        });

        // Write changes back to file
        fs.writeFileSync(filePath, $.html());
        
    } catch (err) {
        console.error(`Error processing ${filePath}: ${err.message}`);
    }
});

console.log("Tasks 1, 2, and 3 completed on all tool pages.");
