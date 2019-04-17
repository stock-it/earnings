const mongoose = require('mongoose');
const Earnings = require('./Earning/EarningScheme');

// const mongoUri = 'mongodb://localhost/stock';
// const mongoUri = 'mongodb://gary:abcd1234@ds031922.mlab.com:31922/front-end-capstone-project';
// const mongoUri = process.env.DATABASEURL;
const mongoUri = 'mongodb://172.17.0.2/stock';
mongoose.connect(mongoUri, { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  });
const db = mongoose.connection;

const getEarning = (id, callback) => {
  const query = { id };
  Earnings.find(query, (err, data) => {
    if (err) return callback(err)
    callback(null, data);
  });
};

const createEarning = (item, callback) => {
  const query = item;
  Earnings.updateOne(query, (err, data) => {
    if (err) callback(err);
    callback(data);
  });

  // req.newData.id = item.id;
  // req.newData.company = item.company;
  // req.actualEarning = item.actualEarning;
  // req.estimatedEarning = item.estimatedEarning;
  // req.quarter = item.quarter;
  // req.quarterNumber = item.quarterNumber;

  // Earnings.findOneAndUpdate(query, req.newData, {upsert:true}, (err, doc) => {
  //     if (err) return res.send(500, { error: err });
  //     return res.send("succesfully saved");
  // });
};

const updateEarning = (item, callback) => {
  const query = item;
  Earnings.updateOne(query, (err, data) => {
    if (err) callback(err);
    callback(data);
  });
};

const deleteEarning = (id, callback) => {
  const query = { id };
  Earnings.deleteOne(query, (err) => {
    if (err) callback(err);
  });
};

module.exports = db;
module.exports.getEarning = getEarning;
module.exports.createEarning = createEarning;
module.exports.updateEarning = updateEarning;
module.exports.deleteEarning = deleteEarning;
