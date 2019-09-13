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
    email,
  } = req.body;
  // query the database for the user with the input email
  return models.Users.findOne({
    where: {
      email,
    },
  })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(404).json('User not found');
      }
      console.log(foundUser);
      // if the user exists:
      // foundUser is an object with the user info from the db; pass the zipcode to getMarketsInfo
      return getMarketsInfo(foundUser.zipcode)
        .then((marketInfo) => res.send(marketInfo))
        .catch((err) => console.error(err));
    });
});


app.post('/api/usercoords', (req, res) => {
  console.log(req.body);
  const { zipcode } = req.body;
  return getUserCoordinates(zipcode)
    .then((userLocation) => {
      res.send(userLocation);
    })
    .catch((err) => console.error(err));
});

// app.get('/', () => {

// })

app.post('/api/localIngredients', (req, res) => {
  console.log(req.body);
  const { zipcode } = req.body;
  return getUserCoordinates(zipcode)
    .then((userLocation) => {
      // userLocation in an object with the user's city, abbrv state and coordinates (an array)
      const { city, state, geopoint } = userLocation;
      return models.States.findAll({ where: { ABBREVIATION: state } })
        .then((stateObj) => {
          if (!stateObj) {
            return res.status(404).json('State not found');
          }
          // region is the state's region [CONTINUE HERE!!!!!!!!!!!!!!!!!!!!!]
          const { region } = stateObj[0];
          function getMonthWord() {
            const dt = new Date();
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return months[dt.getMonth()];
          }
          const month = getMonthWord();
          return models.Ingredients.findAll({
            where: {
              [month]: 1,
              region,
            },
          })
            .then((ingredients) => {
              console.log(ingredients);
              res.send(ingredients);
            });
        })
        .catch((err) => console.error(err));
    });
});


// these are not actual endpoints - use them with postman to see how the helper functions work
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
