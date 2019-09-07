require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const userRoutes = require('../routes/Users');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve the signup/login routes
app.use(userRoutes);
// serve the static files
app.use(express.static(path.join(__dirname, '../react-client/dist')));

console.log('Hello World!');

app.get('/', () => {

});

app.get('/', () => {

});

app.post('/', () => {

});

app.post('/', () => {

});

app.listen(PORT, () => {
  console.log(`Hey im listening on port ${PORT}!`);
});
