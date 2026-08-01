const https = require('https');
https.get('https://unpkg.com/@imgly/background-removal-data@1.4.3/dist/014c9e0229363137e92b85ed3c6f56b1386c279cdd9af2d7f1960ed8428b5e94', (res) => {
    console.log('Status:', res.statusCode);
    console.log('Headers:', res.headers);
    
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
            console.log('Redirect Status:', res2.statusCode);
            console.log('Redirect Headers:', res2.headers);
        });
    }
});
