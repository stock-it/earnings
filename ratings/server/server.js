const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3003;
const db = require('../database/index.js');

app.use(express.static(`${__dirname}/../public/`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/data/ratings', (req, res) => {
  // set Default data equal to 001
  // if (req.params.id === undefined) {
    db.getRating('001', (data) => {
      res.status(200).json(data);
    });
  // } else {
  //   db.getPaidPrice(req.params.id, (data) => {
  //     res.status(200).json(data);
  //   });
  // }
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
