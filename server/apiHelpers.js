const axios = require('axios');

const { FOOD2FORKKEY } = process.env;

const getMarketsInfo = (zip) => axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`)
  .then((res) => res.data.results.map((market) => axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${market.id}`)))
  .then((promArray) => axios.all(promArray))
  .catch((err) => console.log(err));

const getUserCoordinates = (zip) => axios.get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}`)
  .then((res) => console.log(res.data.records[0].geometry.coordinates))
  .catch((err) => console.log(err));

const getRecipes = (ingredientsArray) => {
  if (ingredientsArray.length === 1) {
    return axios.get(`https://www.food2fork.com/api/search?key=${FOOD2FORKKEY}&q=${ingredientsArray[0]}`)
      .then((res) => console.log(res));
  }
  if (ingredientsArray.length === 2) {
    return axios.get(`https://www.food2fork.com/api/search?key=${FOOD2FORKKEY}&q=${ingredientsArray[0], ingredientsArray[1]}`)
      .then((res) => console.log(res));
  }
  if (ingredientsArray.length === 3) {
    return axios.get(`https://www.food2fork.com/api/search?key=${FOOD2FORKKEY}&q=${ingredientsArray[0], ingredientsArray[1], ingredientsArray[2]}`)
      .then((res) => console.log(res.data.recipes));
  }
};

module.exports = {
  getMarketsInfo,
  getUserCoordinates,
  getRecipes,
};
