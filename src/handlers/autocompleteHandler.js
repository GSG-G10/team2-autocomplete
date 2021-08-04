const fs = require('fs');
const path = require('path');

const autocompleteHandler = async (req, res) => {
  const endpoint = req.url;
  const cityFilePath = path.join(__dirname, '..', 'cities.json');
  let searchText = endpoint.split('?')[1];

  fs.readFile(cityFilePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      const jsonData = JSON.parse(data.toString('utf-8'));
      searchText = searchText.charAt(0).toUpperCase() + searchText.slice(1);
      const searchResult = jsonData.filter((item) => item.name.startsWith(searchText));
      const size = 30;
      const topResults = searchResult.slice(0, size).filter((i, idx) => idx < size);
      res.end(JSON.stringify(topResults));
    }
  });
};

module.exports = autocompleteHandler;
