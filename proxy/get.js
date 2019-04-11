var axios = require('axios');

const getData = function(id){
 axios.get(`http://localhost:3001/${id}`);
 axios.get(`http://localhost:3002/${id}`);
}

console.log(axios.get);

module.exports.getData = getData;
