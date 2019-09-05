const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Hello World!');


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
