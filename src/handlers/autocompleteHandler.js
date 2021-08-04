const fs = require('fs');
const path = require('path');
const queryString = require('querystring');

const autocompleteHandler = (req, res) => {
  const endpoint = req.url;
  const cityFilePath = path.join(__dirname, '..', 'cities.json');
  const searchText = endpoint.split('?')[1];
  let { q } = queryString.parse(searchText);
  fs.readFile(cityFilePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const jsonData = JSON.parse(data.toString('utf-8'));
      q = q.charAt(0).toUpperCase() + q.slice(1);
      const searchResult = jsonData.filter((item) => item.name.startsWith(q));
      const size = 30;
      const topResults = searchResult.slice(0, size).filter((i, idx) => idx < size);
      res.end(JSON.stringify(topResults));
    }
  });
};

module.exports = autocompleteHandler;
/// ///
// let searchText = endpoint.split('?')[1];
// const jsonData = JSON.parse(data.toString('utf-8'));
// searchText = searchText.charAt(0).toUpperCase() + searchText.slice(1);
// const searchResult = jsonData.filter((item) => item.name.startsWith(searchText));
// const size = 30;
// const topResults = searchResult.slice(0, size).filter((i, idx) => idx < size);
// res.end(JSON.stringify(topResults));
