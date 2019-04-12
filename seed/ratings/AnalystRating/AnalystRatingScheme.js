const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ratingsSchema = new mongoose.Schema({
  id: String,
  company: String,
  rating: String,
});

const Rating = mongoose.model('Rating', ratingsSchema);

module.exports = Rating;
