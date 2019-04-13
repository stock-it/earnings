const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:id', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/' + 'index.html');
});

const chartReq = axios.create({
  baseURL: 'http://ec2-13-57-177-212.us-west-1.compute.amazonaws.com:2468/'
});

app.get('/api/:stockId', (req, res) => {
  chartReq.get(`api/${req.params.stockId}`)
  .then((response) => {
    res.send(response.data);
  })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
