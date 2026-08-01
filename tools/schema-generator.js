const schemaSelect = document.getElementById('schema-select');
const schemaForms = document.querySelectorAll('.schema-form');
const codeOutput = document.getElementById('code-output');
const copyBtn = document.getElementById('copy-btn');
const btnAddFaq = document.getElementById('btn-add-faq');
const faqContainer = document.getElementById('faq-container');

// Event Listeners for generic inputs
document.querySelectorAll('.org-input, .web-input, .art-input, .loc-input').forEach(input => {
    input.addEventListener('input', generateSchema);
    input.addEventListener('change', generateSchema);
});

// Master Dropdown Switcher
schemaSelect.addEventListener('change', (e) => {
    const targetId = `form-${e.target.value}`;
    schemaForms.forEach(form => {
        form.classList.remove('active');
        if (form.id === targetId) {
            form.classList.add('active');
        }
    });
    generateSchema();
});

// FAQ Dynamic Logic
let faqCount = 0;

function addFaqItem() {
    faqCount++;
    const div = document.createElement('div');
    div.className = 'faq-item-form';
    div.innerHTML = `
        <button class="remove-faq-btn" title="Remove Question"><i class="ri-close-line"></i></button>
        <div class="form-group">
            <label>Question ${faqCount}</label>
            <input type="text" class="faq-input-q" placeholder="e.g., What is your return policy?">
        </div>
        <div class="form-group" style="margin-bottom:0;">
            <label>Answer</label>
            <textarea class="faq-input-a" placeholder="We offer a 30-day money-back guarantee..."></textarea>
        </div>
    `;
    
    div.querySelector('.remove-faq-btn').addEventListener('click', () => {
        div.remove();
        generateSchema();
    });
    
    div.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', generateSchema);
    });
    
    faqContainer.appendChild(div);
    generateSchema();
}

btnAddFaq.addEventListener('click', addFaqItem);
// Add one initial FAQ row
addFaqItem();

// Helper to grab values from a specific class
function getValuesByClass(className) {
    const data = {};
    document.querySelectorAll(`.${className}`).forEach(input => {
        const key = input.getAttribute('data-key');
        if (input.value.trim() !== '') {
            if (key === 'sameAs') {
                data[key] = input.value.split(',').map(s => s.trim()).filter(s => s);
            } else {
                data[key] = input.value.trim();
            }
        }
    });
    return data;
}

// JSON Syntax Highlighting
function syntaxHighlightJSON(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'token-number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'token-key';
            } else {
                cls = 'token-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'token-boolean';
        } else if (/null/.test(match)) {
            cls = 'token-null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function renderOutput(jsonObject) {
    const jsonStr = JSON.stringify(jsonObject, null, 2);
    let htmlStr = `<span class="token-bracket">&lt;script type="application/ld+json"&gt;</span>\n`;
    htmlStr += syntaxHighlightJSON(jsonStr) + '\n';
    htmlStr += `<span class="token-bracket">&lt;/script&gt;</span>`;
    codeOutput.innerHTML = htmlStr;
}

// Main Generation Logic
function generateSchema() {
    const type = schemaSelect.value;
    let schema = {
        "@context": "https://schema.org",
    };

    if (type === 'organization') {
        const vals = getValuesByClass('org-input');
        schema["@type"] = "Organization";
        Object.assign(schema, vals);
    } 
    else if (type === 'website') {
        const vals = getValuesByClass('web-input');
        schema["@type"] = "WebSite";
        schema.name = vals.name;
        schema.url = vals.url;
        if (vals.target) {
            schema.potentialAction = {
                "@type": "SearchAction",
                "target": vals.target,
                "query-input": "required name=search_term_string"
            };
        }
    }
    else if (type === 'article') {
        const vals = getValuesByClass('art-input');
        schema["@type"] = "Article";
        schema.headline = vals.headline;
        if (vals.image) schema.image = [vals.image];
        if (vals.datePublished) schema.datePublished = vals.datePublished + "T08:00:00+08:00";
        if (vals.dateModified) schema.dateModified = vals.dateModified + "T09:20:00+08:00";
        if (vals.author) {
            schema.author = [{
                "@type": "Person",
                "name": vals.author
            }];
        }
        if (vals.publisher) {
            schema.publisher = {
                "@type": "Organization",
                "name": vals.publisher
            };
        }
        if (vals.mainEntityOfPage) {
            schema.mainEntityOfPage = {
                "@type": "WebPage",
                "@id": vals.mainEntityOfPage
            };
        }
    }
    else if (type === 'faq') {
        schema["@type"] = "FAQPage";
        const mainEntity = [];
        document.querySelectorAll('.faq-item-form').forEach(form => {
            const q = form.querySelector('.faq-input-q').value.trim();
            const a = form.querySelector('.faq-input-a').value.trim();
            if (q && a) {
                mainEntity.push({
                    "@type": "Question",
                    "name": q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": a
                    }
                });
            }
        });
        if (mainEntity.length > 0) {
            schema.mainEntity = mainEntity;
        } else {
            schema.mainEntity = [{
                "@type": "Question",
                "name": "Add a question to see the preview",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Answer goes here."
                }
            }];
        }
    }
    else if (type === 'localbusiness') {
        const vals = getValuesByClass('loc-input');
        schema["@type"] = vals["@type"] || "LocalBusiness";
        if (vals.name) schema.name = vals.name;
        if (vals.image) schema.image = vals.image;
        if (vals.telephone) schema.telephone = vals.telephone;
        
        let address = { "@type": "PostalAddress" };
        let hasAddr = false;
        ['streetAddress', 'addressLocality', 'addressRegion', 'postalCode', 'addressCountry'].forEach(k => {
            if (vals[k]) {
                address[k] = vals[k];
                hasAddr = true;
            }
        });
        if (hasAddr) {
            schema.address = address;
        }
    }

    // Clean up undefined properties
    Object.keys(schema).forEach(key => schema[key] === undefined ? delete schema[key] : {});

    renderOutput(schema);
}

// Copy functionality
copyBtn.addEventListener('click', () => {
    const rawCode = codeOutput.textContent;
    navigator.clipboard.writeText(rawCode).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => copyBtn.innerHTML = originalHtml, 2000);
    });
});

// Initial generation
generateSchema();
