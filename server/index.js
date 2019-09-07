require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('../routes/Users');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use cors to allow server and client to run on different ports
app.use(cors());

const PORT = process.env.PORT || 5000;

// serve the signup/login routes
app.use('/api', userRoutes);
// serve the static index.html file in React-client folder
app.use(express.static(path.join(__dirname, '../react-client/public')));

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
