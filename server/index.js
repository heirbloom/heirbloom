const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../react-client/dist')));

const PORT = process.env.PORT || 3000;

console.log('Hello World!');

app.get('/',() => {

})

app.get('/', () => {

})

app.post('/', () => {

})

app.post('/', () => {

})

app.listen(PORT, () => {
  console.log(`Hey im listening on port ${PORT}!`);
});

