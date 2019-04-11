const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema({
  id: String,
  company: String,
  price: Number,
  day: Number,
  ticker: String,
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
