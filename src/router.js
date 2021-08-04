const fs = require("fs");
const path = require("path");
const autocompleteHandler = require("./handlers/autoCompleteHandler");
const publicHandler = require("./handlers/publicHandler");

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    homeHandler(req, res);
  } else if (endpoint.includes("search")) {
    autocompleteHandler(req, res);
  } else if (req.url.includes("public")) {
    publicHandler(req, res);
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
};

module.exports = router;
