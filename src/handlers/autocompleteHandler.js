const fs = require('fs');
const path = require('path');
const queryString = require('querystring');

const autocompleteHandler = (req, res) => {
  const endpoint = req.url;
  const animeFilePath = path.join(__dirname, '..', '/data','anime-database.json');
  const searchText = endpoint.split('?')[1];
  let { q } = queryString.parse(searchText);
  fs.readFile(animeFilePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const jsonData = JSON.parse(data.toString('utf-8'));
      q = q.charAt(0).toUpperCase() + q.slice(1);
      const searchResult = jsonData.filter((item) => item.title.startsWith(q));
      console.log(searchResult)
      const size = 30;
      const topResults = searchResult.slice(0, size).filter((i, idx) => idx < size);
      res.end(JSON.stringify(topResults));
    }
  });
};

module.exports = autocompleteHandler;
