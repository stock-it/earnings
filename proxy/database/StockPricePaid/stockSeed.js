/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
const db = require('../index.js');
const Stock = require('./StockScheme.js');
const companyData = require('../stockList.js');

const sampleStock = [];

for (const company of companyData) {
  const companyName = company.company;
  let price = Math.random() * 1000;
  for (let day = 0; day < 252; day += 1) {
    let range = Math.floor(Math.random() * 100);
    range *= Math.floor(Math.random() * 2) === 1 ? 0.05 : -0.047;
    price *= (1 + range / 100);
    price = price.toFixed(2);
    sampleStock.push({
      company: companyName,
      price: Number(price),
      day,
      id: company.id,
      ticker: company.ticker,
    });
  }
}

const insertSampleStocks = function () {
  Stock.create(sampleStock)
    .then(() => db.close());
};

insertSampleStocks();
