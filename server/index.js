const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const axios = require('axios');

const { getMarketsInfo } = require('./apiHelpers');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../react-client/public')));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

const PORT = process.env.PORT || 3000;

app.post('/usdaResponse', (req, res) => {
  getMarketsInfo(70118)
    .then((marketInfo) => {
      res.send(marketInfo.map((marketObj) => marketObj.data));
    })
    .catch((err) => console.log(err));
});

// app.get('/', () => {

// })

// app.post('/', () => {

// })

// app.post('/', () => {

// })

app.listen(PORT, () => {
  console.log(`Hey im listening on port ${PORT}!`);
});
