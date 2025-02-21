const http = require('http');

const server = http.createServer((req, res) => {
  // Without proper handling, this can lead to memory leaks if large requests are made.
  const chunks = [];

  req.on('data', chunk => {
    chunks.push(chunk);
  });

  req.on('end', () => {
    const body = Buffer.concat(chunks).toString();
    console.log('Request body:', body);
    res.end('OK');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});