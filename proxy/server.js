const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const get = require('./get.js');
var $ = require("jquery");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:id', (req, res) => {
  get.getData(req.param.id);
  res.status(200).sendFile(__dirname + '/public/' + 'index.html');
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
