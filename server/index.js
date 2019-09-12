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
  const {
    email
  } = req.body;
  // query the database for the user with the input email
  return models.Users.findOne({
      where: {
        email
      }
    })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(404).json('User not found');
      }
      // if the user exists:
      // foundUser is an object with the user info from the db; pass the zipcode to getMarketsInfo
      return getMarketsInfo(foundUser.zipcode)
        .then((marketInfo) => {
          return res.send(marketInfo);
        })
        .catch((err) => console.error(err));
    });
});


// app.get('/', () => {

// })

// these are not actual endpoints - use them with postman to see how the helper functions work
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