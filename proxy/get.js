var axios = require('axios');

const getData = function(id){
 axios.get(`http://localhost:3001/data/price/${id}`);
 axios.get(`http://localhost:3002/data/earnings/${id}`);
}

console.log(axios.get);

module.exports.getData = getData;
