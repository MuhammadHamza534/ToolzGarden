const urlInput = document.getElementById('url-input');
const extractBtn = document.getElementById('extract-btn');
const errorMsg = document.getElementById('error-msg');
const resultsGrid = document.getElementById('results-grid');

// Cards
const cardMaxres = document.getElementById('card-maxres');
const cardHq = document.getElementById('card-hq');
const cardMq = document.getElementById('card-mq');
const cardDefault = document.getElementById('card-default');

// Images
const imgMaxres = document.getElementById('img-maxres');
const imgHq = document.getElementById('img-hq');
const imgMq = document.getElementById('img-mq');
const imgDefault = document.getElementById('img-default');

// Buttons
const btnMaxres = document.getElementById('btn-maxres');
const btnHq = document.getElementById('btn-hq');
const btnMq = document.getElementById('btn-mq');
const btnDefault = document.getElementById('btn-default');

// Helper to extract YouTube Video ID
function extractVideoID(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function processThumbnail() {
    const url = urlInput.value.trim();
    if (!url) return;

    const videoId = extractVideoID(url);

    if (!videoId) {
        errorMsg.style.display = 'block';
        resultsGrid.style.display = 'none';
        return;
    }

    // Hide error, show grid
    errorMsg.style.display = 'none';
    resultsGrid.style.display = 'grid';

    // Reset visibility of all cards (in case they were hidden previously)
    cardMaxres.style.display = 'flex';
    cardHq.style.display = 'flex';
    cardMq.style.display = 'flex';
    cardDefault.style.display = 'flex';

    // Construct URLs
    const maxresUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const mqUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    const defaultUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;

    // Function to safely load image and check for YouTube's 120px wide gray dummy image
    // When a high-res thumbnail doesn't exist, YouTube returns a 120x90 gray image with a camera icon
    const loadImage = (imgElement, cardElement, url) => {
        imgElement.src = url;
        imgElement.onload = () => {
            // YouTube's "not found" image is exactly 120px wide. 
            // If we are checking maxres or hq and it returns 120px, it doesn't exist.
            if ((imgElement === imgMaxres || imgElement === imgHq) && imgElement.naturalWidth <= 120) {
                cardElement.style.display = 'none';
            }
        };
        imgElement.onerror = () => {
            cardElement.style.display = 'none';
        };
    };

    // Load Images
    loadImage(imgMaxres, cardMaxres, maxresUrl);
    loadImage(imgHq, cardHq, hqUrl);
    loadImage(imgMq, cardMq, mqUrl);
    loadImage(imgDefault, cardDefault, defaultUrl);

    // Set Download/Open Links
    btnMaxres.href = maxresUrl;
    btnHq.href = hqUrl;
    btnMq.href = mqUrl;
    btnDefault.href = defaultUrl;
    
    // Smooth scroll to results
    resultsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Event Listeners
extractBtn.addEventListener('click', processThumbnail);

urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processThumbnail();
    }
});
