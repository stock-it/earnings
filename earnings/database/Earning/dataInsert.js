const db = require('../index.js');
const Earning = require('./EarningScheme');

//const JSONsampleEarnings = require('./../../writeMe.json');

// const rs = require('fs').createReadStream('./../../writeMe.json');
const rs = require('fs').createReadStream(__dirname + '/writeMe100.csv');
const readable = rs;
readable.on('data', (chunk) => {
  console.log(chunk);
  console.log(`Received ${chunk.length} bytes of data.`);
});
readable.on('end', () => {
  console.log('There will be no more data.');
});


//const sampleEarnings = JSON.parse(sampleEarningsJSON);


// const insertSampleEarnings = function () {
//   Earning.create(sampleEarnings)
//     .then(() => db.close());
// };

// insertSampleEarnings();
