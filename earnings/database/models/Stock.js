//Model, Schema goes here
const pool = require('../../database/index.js');

pool.query(
    `CREATE SCHEMA IF NOT EXISTS public AUTHORIZATION student 
    CREATE TABLE IF NOT EXISTS earnings (
        ticker TEXT,
        company VARCHAR(100) NOT NULL, 
        actualEarning FLOAT(2), 
        estimatedEarning FLOAT(2),
        quarter VARCHAR(8), 
        quarterNumber SMALLINT,
        earnings_id SERIAL UNIQUE PRIMARY KEY
    ) CREATE INDEX idx_ticker ON earnings(ticker)`
    , (err, res) => {
    console.log(err, res)
    pool.end()
})

module.exports = Stock;
