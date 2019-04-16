const mongoose = require('mongoose');
const Stock = require('./StockPricePaid/StockScheme.js');

const mongoUri = 'mongodb://172.17.0.2/stock';
// const mongoUri = 'mongodb://gary:abcd1234@ds031922.mlab.com:31922/front-end-capstone-project';
// const mongoUri = process.env.DATABASEURL;
mongoose.connect(mongoUri, { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  });
const db = mongoose.connection;

const getPaidPrice = (id, callback) => {
  const query = { id };
  Stock.find(query, (err, data) => {
    if (err) callback(err);
    callback(data);
  });
};

module.exports = db;
module.exports.getPaidPrice = getPaidPrice;
