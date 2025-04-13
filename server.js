const http = require('http');
const fs = require('fs');
const path = require('path');

// Change port to avoid conflicts with other services
const PORT = 3001;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url}`);
    
    // Normalize URL by removing query string and trailing slash
    let url = req.url.split('?')[0];
    if (url.endsWith('/') && url.length > 1) {
        url = url.slice(0, -1);
    }
    
    // If URL is root, serve index.html
    if (url === '/') {
        url = '/index.html';
    }
    
    // Get the file path
    const filePath = path.join(__dirname, url);
    
    // Get the file extension
    const extname = path.extname(filePath);
    
    // Set the content type based on the file extension
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    
    // Read the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
                    if (err) {
                        // If 404.html doesn't exist, send a simple error message
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 Not Found</h1>');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`You can also access it from your network at http://<your-ip-address>:${PORT}/`);
}); 