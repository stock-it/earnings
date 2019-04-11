const mongoose = require('mongoose');
const Stock = require('./StockPricePaid/StockScheme.js');
const Rating = require('./AnalystRating/AnalystRatingScheme.js');
const Earnings = require('./Earning/EarningScheme');

// const mongoUri = 'mongodb://localhost/stock';
const mongoUri = 'mongodb://gary:abcd1234@ds031922.mlab.com:31922/front-end-capstone-project';
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

const get = (callback) => {
  // eslint-disable-next-line array-callback-return
  Stock.find((err, data) => {
    if (err) callback(err);
    callback(data);
  });
};

const getPaidPrice = (id, callback) => {
  const query = { id };
  Stock.find(query, (err, data) => {
    if (err) callback(err);
    callback(data);
  });
};

const getRating = (id, callback) => {
  const query = { id };
  Rating.find(query, (err, data) => {
    if (err) callback(err);
    callback(data);
  });
};

const getEarning = (id, callback) => {
  const query = { id };
  Earnings.find(query, (err, data) => {
    if (err) callback(err);
    callback(data);
  });
};

module.exports = db;
module.exports.getPaidPrice = getPaidPrice;
module.exports.get = get;
module.exports.getRating = getRating;
module.exports.getEarning = getEarning;
