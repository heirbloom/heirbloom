require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');
const userRoutes = require('../routes/Users');

const { getMarketsInfo } = require('./apiHelpers');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use cors to allow server and client to run on different ports
// app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../react-client/public')));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

// serve the signup/login routes
app.use('/api', userRoutes);
// serve the static index.html file in React-client folder
app.use(express.static(path.join(__dirname, '../react-client/public')));

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
