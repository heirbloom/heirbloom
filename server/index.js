require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/Users');
const models = require('../database-mysql');

const {
  getMarketsInfo,
  getUserCoordinates,
  getRecipes,
} = require('./apiHelpers');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
const PORT = 3000;


// serve the signup/login routes
app.use('/api', userRoutes);

app.post('/api/usdaResponse', (req, res) => {
  const keys = Object.keys(req.body);
  const { email } = JSON.parse(keys[0]);
  models.Users.findOne({ where: { email } })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(404).json('User not found');
      }
      getMarketsInfo(foundUser.zipcode)
        .then((marketInfo) => {
          console.log(marketInfo);
          res.send(marketInfo.map((marketObj) => marketObj.data));
          res.sendStatus(200);
        })
        .catch((err) => console.log(err));
    });
});

// app.post('/api/usdaResponse', (req, res) => {
//   console.log(req.body);
//   getMarketsInfo(req.body.zipcode);
// });

// app.get('/', () => {

// })

app.post('/api/usercoords', (req, res) => {
  getUserCoordinates(70118);
});

app.post('/api/recipes', (req, res) => {
  getRecipes(['broccoli', 'onion', 'garlic']);
});

// app.post('/', () => {

// })

app.use(express.static(path.join(__dirname, '/../react-client/public')));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Hey im listening on port ${PORT}!`);
});
