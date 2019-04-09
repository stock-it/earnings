const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const earningSchema = new mongoose.Schema({
  id: String,
  company: String,
  actualEarning: Number,
  estimatedEarning: Number,
  quarter: String,
  quarterNumber: Number,
});

const Earnings = mongoose.model('Earning', earningSchema);

module.exports = Earnings;
