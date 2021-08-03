const fs = require('fs');
const path= require('path');

//search?search_text={search}&page_size={pageSize}&start_at={startAt}

const handleSearch = async (req,res) => {
    
    // req.setEncoding('utf8'); 
    const endpoint= req.url; 
    const cityFilePath = path.join(__dirname,'..','cities.json');
    
    let searchText = endpoint.split('?')[1];
    
    fs.readFile(cityFilePath,(err,data)=>{
        if (err){ 
            res.writeHead(500);
            res.end('Server Error')
        }
        else {
            const jsonData = JSON.parse(data.toString('utf-8'));
            
            searchText = searchText.charAt(0).toUpperCase() + searchText.slice(1);

            const newArr = jsonData.filter((item) => 
                item.name.startsWith(searchText)
            );

            let toRet = [];

            let count = 0;
            for(let i =0; i < newArr.length ; i++ ){
                count++;
                if(count < 10)
                    toRet[i] = newArr[i];
                else
                    break;
            }

            res.end(JSON.stringify(toRet));

        }
    })
}

module.exports = handleSearch;