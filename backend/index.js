const axios = require("axios").default;

let data = axios.get("https://dev-job-api.herokuapp.com/api/data/locations/tampere/technologies")
.then(res => {


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

    for (const [key, value] of array) {
        console.log(`${key}: ${value}`);

      }
});