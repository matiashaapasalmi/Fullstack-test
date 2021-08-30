const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require("axios").default;
let url = "https://dev-job-api.herokuapp.com/api/data/locations"



http.createServer( (request, response) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        "Content-Type" : "application/json"
      };

    console.log('request ', request.url);
    let new_url = url + request.url + "/technologies";

    axios.get(new_url).then(res => {
    
    
        let array = (Object.entries(res.data))
        
    
        array.sort( ([key, value], [key2, value2]) => {
            if (value > value2){
                return -1;
            }
            else if (value < value2){
                return 1;
            }
            
            return 0;
            
        });
    
        response.writeHead(200, headers);
        response.write(JSON.stringify(array));
        response.end();

    }).catch(err => {
        response.writeHead(400, headers);
        response.write(JSON.stringify(err));
        response.end();
    })

}).listen(8080)


// for (const [key, value] of array) {
//             console.log(`${key}: ${value}`);
    
//           }