const searchHandler = require('./handlers/searchHandler')

const router = (req,res)=>{
    const endpoint = req.url;
    if (endpoint === "/"){
        res.end('hheee')
    }
    else if (endpoint.includes('search') ){
        searchHandler(req,res);
    }
    else{
        res.writeHead(404);
        res.end('Page Not Found')
    }
}

module.exports= router