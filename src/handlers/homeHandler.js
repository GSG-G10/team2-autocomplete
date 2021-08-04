<<<<<<< HEAD
const { dir } = require('console');
const fs= require('fs')
=======
const fs = require('fs')
>>>>>>> 99f6a2ef7e1354daba39364d443d87f9725799f8
const path = require('path')

const homeHandler = (req, res) => {
    const filePath = path.join(__dirname, "../../", "public", "index.html");
    fs.readFile(filePath, (err, data) => {
    if (err) {
<<<<<<< HEAD
        console.log(err);
=======
>>>>>>> 99f6a2ef7e1354daba39364d443d87f9725799f8
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("500 Error happened");
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    }
    });
}

<<<<<<< HEAD
module.exports= homeHandler;
=======

module.exports = homeHandler;
>>>>>>> 99f6a2ef7e1354daba39364d443d87f9725799f8
