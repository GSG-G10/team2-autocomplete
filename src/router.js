const autocompleteHandler = require('./handlers/autocompleteHandler');
const publicHandler = require('./handlers/publicHandler');
const homeHandler = require('./handlers/homeHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(req, res);
  } else if (endpoint.includes('search')) {
    autocompleteHandler(req, res);
  } else if (req.url.includes('public')) {
    publicHandler(req, res);
  } else {
    res.writeHead(404);
    res.end('Page Not Found');
  }
};

module.exports = router;
