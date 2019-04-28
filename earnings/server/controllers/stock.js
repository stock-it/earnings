//Controllers
//const Attendee = require('../../database/models/Stock');
const pool = require('../../database/index.js');

const getEarning = (ticker, callback) => {
    let targetTicker = `\'${ticker}\'`;
    // READ route, $ curl localhost:8080/api/earnings/AAPL
    return pool.query(
        `SELECT * FROM earnings 
        WHERE ticker=${targetTicker}`
        , (err, res) => {
            if (err) {
                console.log(err);
                return callback(err);
            } else {
                debugger;
                let stocks = res.rows;
                let clientExpect = [];
                for (let i = 0; i < stocks.length; i++) {
                    let eachRow = {
                        id: stocks[i].earnings_id,
                        ticker: stocks[i].ticker,
                        company: stocks[i].company,
                        actualEarning: stocks[i].actualearning,
                        estimatedEarning: stocks[i].estimatedearning,
                        quarter: stocks[i].quarter,
                        quarterNumber: stocks[i].quarternumber,
                    }
                    clientExpect.push(eachRow);
                }
                callback(null, clientExpect);
            }
    });
};

const createEarning = (newStock, callback) => {
    // CREATE route, $ curl -X POST localhost:8080/stocks/
    let argument = `earnings (
        ticker,
        company, 
        actualEarning, 
        estimatedEarning,
        quarter, 
        quarterNumber,
        earnings_id
    ) VALUES (
        \'${newStock.ticker}\',\'${newStock.company}\',${newStock.actualEarning},${newStock.estimatedEarning},\'${newStock.quarter}\',${newStock.quarterNumber},${newStock.earnings_id}
    ) ON CONFLICT DO NOTHING`;

    return pool.query(
        `${argument}`
        , (err, res) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                callback('Stock created');
            }
    });
};

const deleteEarning = (id, callback) => {
    // DELETE route, $ curl -X DELETE localhost:8080/stocks/70000001
    pool.query(
        `DELETE FROM earnings
        WHERE earnings_id=${id}`
        , (err, res) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log('deleted');
                callback('Stock deleted: ', res.body);
            }
    });
};

const updateEarning = (myID, myActual, callback) => {
    // PUT route, $ curl -X PUT localhost:8080/stocks/70000001/7
    console.log(myActual, myID)
    return pool.query(
        `UPDATE earnings
        SET actualearning = ${myActual}
        WHERE earnings_id = ${myID}
        `
        , (err, res) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log('updated');
                callback('Stock Updated');
            }
    });
};

module.exports.getEarning = getEarning;
module.exports.createEarning = createEarning;
module.exports.updateEarning = updateEarning;
module.exports.deleteEarning = deleteEarning;