// require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/Users');
const models = require('../database-mysql');

const {
  getMarketsInfo,
} = require('./apiHelpers');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../react-client/public')));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

// serve the signup/login routes
app.use('/api', userRoutes);

app.post('/api/usdaResponse', (req, res) => {
  const { email } = req.body;
  // req.body is a JSON object nested in a regular object
  // const keys = Object.keys(req.body);
  // console.log('KEYSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', keys);
  // const { email } = JSON.parse(keys[0]);
  // query the database for the user with the input email
  models.Users.findOne({ where: { email } })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(404).json('User not found');
      }
      // if the user exists:
      console.log(foundUser);
      // foundUser is an object with the user info from the db; pass the zipcode to getMarketsInfo
      getMarketsInfo(foundUser.zipcode)
        .then((marketInfo) => {
          console.log(marketInfo);
          res.send(marketInfo.map((marketObj) => marketObj.data));
        })
        .catch((err) => console.log(err));
    });
});

// app.post('/api/usdaResponse', (req, res) => {
//   console.log(req.body);
//   getMarketsInfo(70118)

// app.get('/', () => {

// })

// app.post('/', () => {

// })

// app.post('/', () => {

// })

app.listen(PORT, () => {
  console.log(`Hey im listening on port ${PORT}!`);
});
