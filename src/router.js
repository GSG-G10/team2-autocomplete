const fs = require("fs");
const path = require("path");
const searchHandler = require("./handlers/searchHandler");
const publicHandler = require("./handlers/publicHandler");

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("500 Error happened");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (endpoint.includes("search")) {
    searchHandler(req, res);
  } else if (req.url.includes("public")) {
    publicHandler(req, res);
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
};

module.exports = router;
