/* 
  ToolzGarden - Global Scripts
  Shared utilities for dark mode, navigation, and SEO optimization.
*/

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initSearch();
    initCategories();
    initScrollReveal();
    initScrollAndHeader();
    initHamburgerMenu();
    initUtilityListeners();

    // Clean up will-change on above-the-fold animated elements after animations finish
    setTimeout(() => {
        document.querySelectorAll('.hero-animate').forEach(el => {
            el.style.willChange = 'auto';
        });
    }, 2000);
});

/**
 * Throttled scroll handling to prevent layout thrashing and forced reflows.
 */
function initScrollAndHeader() {
    const bar = document.getElementById('scrollProgress');
    const header = document.querySelector('header');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // 1. Scroll Progress Bar
                if (bar) {
                    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
                    bar.style.width = scrolled + '%';
                }

                // 2. Header Shadow
                if (header) {
                    if (window.scrollY > 10) {
                        header.style.boxShadow = '0 1px 20px rgba(0,0,0,0.2)';
                    } else {
                        header.style.boxShadow = 'none';
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/**
 * Hamburger Mobile Navigation Trigger
 */
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    function openMenu() {
        navLinks.classList.add('open');
        hamburger.classList.add('active');
        body.classList.add('nav-open');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close Menu');
    }

    function closeMenu() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        body.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open Menu');
    }

    if (hamburger && navLinks) {
        // Auto-inject close button on pages where it is missing in HTML
        if (!document.getElementById('nav-close-btn')) {
            const autoCloseBtn = document.createElement('button');
            autoCloseBtn.id = 'nav-close-btn';
            autoCloseBtn.className = 'nav-close-btn';
            autoCloseBtn.setAttribute('aria-label', 'Close Menu');
            autoCloseBtn.innerHTML = '&times;';
            navLinks.insertBefore(autoCloseBtn, navLinks.firstChild);
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navLinks.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        const closeBtn = document.getElementById('nav-close-btn') || document.querySelector('.nav-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMenu();
            });
        }

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        document.addEventListener('click', (e) => {
            if (
                navLinks.classList.contains('open') &&
                !navLinks.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                closeMenu();
            }
        });
    }
}

/**
 * Unified, high-performance IntersectionObserver for scroll-reveal animations.
 * Eliminates duplicate observers and multiple document-wide reflows.
 */
function initScrollReveal() {
    const revealSelectors = [
        '.tool-card',
        '.feature-item',
        '.faq-item',
        '.category-tabs',
        '.section-title',
        '.footer-brand',
        '.footer-links',
        '.controls-card',
        '.tool-description',
        '.coming-soon-panel',
        '.badge-private',
        'h2',
        '.why-section',
        '.stats-section',
        '.preview-container',
        '.upload-area'
    ];

    // Add CSS reveal class and configure stagger delays in bulk
    revealSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            if (!el.classList.contains('hero-animate')) {
                el.classList.add('reveal');
            }
            if (selector === '.tool-card') {
                el.style.transitionDelay = `${(i % 3) * 0.08}s`;
            } else if (selector === '.feature-item') {
                el.style.transitionDelay = `${(i % 4) * 0.08}s`;
            } else if (selector === '.footer-links' || selector === '.footer-brand') {
                el.style.transitionDelay = `${(i % 3) * 0.08}s`;
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        requestAnimationFrame(() => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    });

    // Observe elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Initialize Dark/Light Theme based on localStorage or system preference
 */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
}

/**
 * Navigation setups (e.g. highlighting current page)
 */
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const linkPage = href.split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        }
    });
}

/**
 * Search functionality for tools on the homepage
 */
function initSearch() {
    const searchInput = document.getElementById('tool-search');
    const toolCards = document.querySelectorAll('.tool-card');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        toolCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(query) || desc.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

/**
 * Category Filtering Setup for the Homepage Grid
 */
function initCategories() {
    const tabs = document.querySelectorAll('.cat-tab');
    const toolCards = document.querySelectorAll('.tool-card');
    const comingSoonPanel = document.getElementById('coming-soon-panel');
    const initialPanel = document.getElementById('initial-placeholder-panel');
    const toolGrid = document.querySelector('.tool-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            const isComingSoon = tab.classList.contains('coming-soon');

            requestAnimationFrame(() => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                if (initialPanel) initialPanel.style.display = 'none';

                if (isComingSoon) {
                    if (toolGrid) toolGrid.style.display = 'none';
                    if (comingSoonPanel) comingSoonPanel.style.display = 'flex';
                } else {
                    if (comingSoonPanel) comingSoonPanel.style.display = 'none';
                    if (toolGrid) toolGrid.style.display = 'grid';

                    toolCards.forEach(card => {
                        if (card.getAttribute('data-category') === category) {
                            card.style.display = 'flex';
                            card.classList.remove('visible');
                            setTimeout(() => card.classList.add('visible'), 30);
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });

    // Auto-select the first non-coming-soon tab on page load
    // so the "Select a Category" placeholder never shows on initial render.
    const firstTab = Array.from(tabs).find(tab => !tab.classList.contains('coming-soon'));
    if (firstTab) {
        firstTab.click();
    }
}

/**
 * Drag and drop and success states event delegators
 */
function initUtilityListeners() {
    // Upload Zone Drag Effects
    document.querySelectorAll('.upload-zone').forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        zone.addEventListener('drop', () => {
            zone.classList.remove('drag-over');
        });
    });

    // Download Button Success State
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const original = this.textContent;
            this.textContent = 'Downloaded!';
            this.style.background = '#16a34a';
            this.style.transition = 'background 0.3s ease';
            setTimeout(() => {
                this.textContent = original;
                this.style.background = '';
            }, 2000);
        });
    });
}

/**
 * Utility: Format bytes to human readable format
 */
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Utility: File Download helper
 */
function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Shared Image processing utility
 */
const PixUtils = {
    getImageDimensions: (file) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ width: img.width, height: img.height });
            img.src = URL.createObjectURL(file);
        });
    },
    fileToDataURL: (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
        });
    }
};
/* FAQ Accordion */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
    });
    if (!isActive) {
      item.classList.add('active');
    }
  });
});