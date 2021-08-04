const fs = require('fs');
const path = require('path');

const mimeType = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpg',
  js: 'text/javascript',
  json: 'application/json',
  png: 'image/png',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};
const publicHandler = (req, res) => {
  const file = req.url.split('/public')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', file);
  const ext = filePath.split('.')[1];
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': mimeType[ext],
    });
    res.end(data);
  });
};

module.exports = publicHandler;
