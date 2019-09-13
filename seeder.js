const fs = require('fs');
const parse = require('csv-parse');
const models = require('./database-mysql');

const csvData = [];
// read Ingredients.csv file
fs.createReadStream('./Ingredients.csv')
  // feed the contents of the file to the parser and seperating each field by comma
  .pipe(parse({ delimiter: ',' }))
  .on('data', (csvrow) => {
    // console.log('crrow!!!!!!!!!!!!!!!!!!!!!!!!', csvrow);
    // push each row/column into the storage array
    csvData.push(csvrow);
  })
  // after all of the data has been parsed and pushed into csvData
  .on('end', async () => {
    // first row of csvData is the name of each of the columns in the ingredients table
    const headers = csvData[0];
    // slice off the headers row
    const rows = csvData.slice(1);
    // loop though rows
    for (let i = 0; i < rows.length; i += 1) {
      const ingredient = {};
      // loop through columns
      for (let j = 0; j < rows.length; j += 1) {
        // make a key:value pair for each field with the key being that column's header
        ingredient[headers[j]] = rows[i][j];
      }
      // use Sequelize .create method to put the ingredient object in the Ingredients table
      // eslint-disable-next-line no-await-in-loop
      await models.Ingredients.create(ingredient);
    }
  });

// to run this file (convert .csv to populated data in mySQL table): node seeder.js
