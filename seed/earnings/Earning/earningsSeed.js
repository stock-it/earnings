/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
const db = require('../index.js');
const companyData = require('./stockList');
const Earning = require('./EarningScheme');

const sampleEarnings = [];
const EPSdate = ['Q4 2017', 'Q1 2018', 'Q2 2018', 'Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019'];

for (const company of companyData) {
  const companyName = company.company;
  let actualEarning = Math.random() * 7;
  let estimatedEarning = actualEarning;
  let quarterNumber = 0;
  for (const quarter of EPSdate) {
    let range = Math.floor(Math.random() * 100);
    range *= Math.floor(Math.random() * 2) === 1 ? 0.45 : -0.40;
    actualEarning *= (1 + range / 100);
    actualEarning = actualEarning.toFixed(2);

    let estimateRange = Math.floor(Math.random() * 100);
    estimateRange *= Math.floor(Math.random() * 2) === 1 ? 0.10 : -0.10;
    estimatedEarning = actualEarning * (1 + estimateRange / 100);
    estimatedEarning = estimatedEarning.toFixed(2);

    sampleEarnings.push({
      company: companyName,
      actualEarning: Number(actualEarning),
      estimatedEarning: Number(estimatedEarning),
      quarter,
      id: company.id,
      quarterNumber,
    });
    quarterNumber += 1;
  }
}

const insertSampleEarnings = function () {
  Earning.create(sampleEarnings)
    .then(() => db.close());
};

insertSampleEarnings();
