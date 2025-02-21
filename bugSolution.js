const http = require('http');

const server = http.createServer((req, res) => {
  let body = [];
  let bodyLength = 0;
  req.on('data', (chunk) => {
    bodyLength += chunk.length;
    if (bodyLength > 1e6) {
      res.statusCode = 413;
      res.end('Request Entity Too Large');
      return;
    }
    body.push(chunk);
  });
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end('Bad Request');
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('Request body:', body);
    res.end('OK');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});