const fs = require('fs');
const https = require('https');

const hostname = '127.0.0.1'
const port = 4002;

const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world, I`m an https server! My developer is Yuval Shar from Israel and I`m glad to say so.');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at https://${hostname}:${port}/`);
});

