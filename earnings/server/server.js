const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002; //8080
const db = require('../database/index.js');
const stock = require('./controllers/stock')

// app.use(express.static(`${__dirname}/../public/`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/stocks/:id', (req, res) => {
  if (req.params.id === undefined) {
    res.status(400).send('Undefined Ticker ID. Please enter search.');
  }
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/stocks/earnings', (req, res) => {
  // set Default data equal to 001
    stock.getEarning(001, (err, data) => {
      if (err) {
        return res.status(404).send(err)
      }
      return res.status(200).json(data)
    })
});

app.get('/api/earnings/:id', (req, res) => {
    let id = req.params.id || 10;
    stock.getEarning(id, (err, data) => {
      if (err) return res.status(404).send(err)
      res.status(200).json(data)
    })
});

app.post('/stocks', (req, res) => {
  let newStock = req.body || {
    ticker: 'EXAMPLE',
    company: 'My First Company',
    actualearning: 6.31,
    estimatedearning: 5.91,
    quarter: 'Q4 2017',
    quarternumber: 0,
    earnings_id: 70000001,
  }
  stock.createEarning(newStock, (err, data) => {
    if (err) return res.status(404).send(err)
    res.status(200).send(data)
  })
});

app.put('/stocks/:id/:changeEarnings', (req, res) => {
    stock.updateEarning(req.params.id, req.params.changeEarnings, (err, data) => {
      if (err) return res.status(404).send(err)
      res.status(200).json(data)
    })
});

app.delete('/stocks/:id', (req, res) => {
    stock.deleteEarning(req.params.id, (err, data) => {
      if (err) return res.status(404).send(err)
      res.status(200).json(data)
    })
});

// development
// if (err) throw new Error(`This is the error: ${err}`);
// app.use((err, req, res, next) => {
//   res.json({message: err.message});
// })

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
