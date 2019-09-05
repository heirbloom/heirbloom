const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../react-client/dist')));

console.log('Hello World!');


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
