const { dir } = require('console');
const fs= require('fs')
const path = require('path')

const homeHandler = (req, res) => {
    const filePath = path.join(__dirname, "../../", "public", "index.html");
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
}

module.exports= homeHandler;
