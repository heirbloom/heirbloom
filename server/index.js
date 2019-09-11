require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/Users');
// const models = require('../database-mysql');

const {
  getMarketsInfo,
} = require('./apiHelpers');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// serve the signup/login routes
app.use('/api', userRoutes);

app.post('/api/usdaResponse', (req, res) => {
  console.log(req.body);
  getMarketsInfo(70118);
});

// app.get('/', () => {

// })

// app.post('/', () => {

// })

// app.post('/', () => {

// })

app.use(express.static(path.join(__dirname, '/../react-client/public')));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

// serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Hey im listening on port ${PORT}!`);
});
