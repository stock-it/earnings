const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:id', (req, res) => {
  db.getRating(req.params.id, (data) => {
    ratingsData = data;
  });
  db.getEarning(req.params.id, (data) => {
    earningData = data;
  });
  db.getPaidPrice(req.params.id, (data) => {
    stockData = data;
    res.status(200).redirect('/');
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
