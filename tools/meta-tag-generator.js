const inputs = {
    title: document.getElementById('meta-title'),
    desc: document.getElementById('meta-desc'),
    keywords: document.getElementById('meta-keywords'),
    author: document.getElementById('meta-author'),
    robots: document.getElementById('meta-robots'),
    language: document.getElementById('meta-language'),
    ogType: document.getElementById('og-type'),
    ogImage: document.getElementById('og-image'),
    twitterUser: document.getElementById('twitter-user')
};

const codeOutput = document.getElementById('code-output');
const copyBtn = document.getElementById('copy-btn');

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// Very basic syntax highlighting for HTML tags and attributes
function highlightHtml(htmlStr) {
    let highlighted = escapeHtml(htmlStr);
    
    // Highlight brackets
    highlighted = highlighted.replace(/(&lt;\/?)(.*?)(&gt;)/g, (match, p1, p2, p3) => {
        // p1 = &lt; or &lt;/
        // p2 = inner content (tags, attrs)
        // p3 = &gt;
        
        let inner = p2;
        // Match tag name
        inner = inner.replace(/^([a-zA-Z0-9-]+)/, '<span class="token-tag">$1</span>');
        
        // Match attributes
        inner = inner.replace(/([a-zA-Z-]+)=(&quot;.*?&quot;)/g, '<span class="token-attr">$1</span>=<span class="token-val">$2</span>');
        
        return `<span class="token-bracket">${p1}</span>${inner}<span class="token-bracket">${p3}</span>`;
    });
    
    return highlighted;
}

function generateMetaTags() {
    let html = `<!-- Primary Meta Tags -->\n`;
    
    if (inputs.title.value) {
        html += `<title>${inputs.title.value}</title>\n`;
        html += `<meta name="title" content="${inputs.title.value}">\n`;
    }
    
    if (inputs.desc.value) {
        html += `<meta name="description" content="${inputs.desc.value}">\n`;
    }
    
    if (inputs.keywords.value) {
        html += `<meta name="keywords" content="${inputs.keywords.value}">\n`;
    }
    
    if (inputs.author.value) {
        html += `<meta name="author" content="${inputs.author.value}">\n`;
    }
    
    html += `<meta name="robots" content="${inputs.robots.value}">\n`;
    html += `<meta name="language" content="${inputs.language.value}">\n\n`;
    
    html += `<!-- Open Graph / Facebook -->\n`;
    html += `<meta property="og:type" content="${inputs.ogType.value}">\n`;
    
    if (inputs.title.value) {
        html += `<meta property="og:title" content="${inputs.title.value}">\n`;
    }
    
    if (inputs.desc.value) {
        html += `<meta property="og:description" content="${inputs.desc.value}">\n`;
    }
    
    if (inputs.ogImage.value) {
        html += `<meta property="og:image" content="${inputs.ogImage.value}">\n`;
    }
    html += `\n`;
    
    html += `<!-- Twitter -->\n`;
    html += `<meta property="twitter:card" content="${inputs.ogImage.value ? 'summary_large_image' : 'summary'}">\n`;
    
    if (inputs.twitterUser.value) {
        let user = inputs.twitterUser.value;
        if (!user.startsWith('@')) user = '@' + user;
        html += `<meta property="twitter:creator" content="${user}">\n`;
        html += `<meta property="twitter:site" content="${user}">\n`;
    }
    
    if (inputs.title.value) {
        html += `<meta property="twitter:title" content="${inputs.title.value}">\n`;
    }
    
    if (inputs.desc.value) {
        html += `<meta property="twitter:description" content="${inputs.desc.value}">\n`;
    }
    
    if (inputs.ogImage.value) {
        html += `<meta property="twitter:image" content="${inputs.ogImage.value}">\n`;
    }

    // Update DOM
    codeOutput.innerHTML = highlightHtml(html);
}

// Add event listeners
Object.values(inputs).forEach(input => {
    input.addEventListener('input', generateMetaTags);
    input.addEventListener('change', generateMetaTags);
});

// Copy functionality
copyBtn.addEventListener('click', () => {
    const rawHtml = codeOutput.textContent; // textContent ignores the span tags
    navigator.clipboard.writeText(rawHtml).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="ri-check-line"></i> Copied!';
        setTimeout(() => copyBtn.innerHTML = originalHtml, 2000);
    });
});

// Initial generation
generateMetaTags();
