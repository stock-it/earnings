/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
const db = require('../index.js');
const Rating = require('./AnalystRatingScheme.js');
const companyData = require('../stockList.js');

const sampleRatings = [];

for (const company of companyData) {
  const companyName = company.company;
  const ratingsNumber = Math.floor(Math.random() * 80 + 10);
  for (let ratings = 0; ratings < ratingsNumber; ratings += 1) {
    const decision = ['Buy', 'Hold', 'Sell'];
    const rating = decision[Math.floor(Math.random() * 3)];
    sampleRatings.push({
      company: companyName,
      rating,
      id: company.id,
    });
  }
}

const insertSampleRating = function () {
  Rating.create(sampleRatings)
    .then(() => db.close());
};

insertSampleRating();
