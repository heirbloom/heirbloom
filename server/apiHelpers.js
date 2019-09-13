const axios = require('axios');

const { FOOD2FORKKEY } = process.env;

const getMarketsInfo = (zip) => axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`)
  .then((res) => {
    return res.data.results.map(async (market) => {
      const details = await axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${market.id}`);
      // spread operator allows you to combine objects... ES6 is cool
      // combine return of first API call (has marketName) with second API call
      const updatedMarketInfo = { ...market, ...details.data.marketdetails };
      return updatedMarketInfo;
    });
  })
  .then((promArray) => Promise.all(promArray))
  .catch((err) => console.log(err));

const getUserCoordinates = (zip) => axios.get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}`)
  .then((res) => {
    const cityData = res.data.records[0].fields;
    // console.log(cityData);
    // geoPoint is an array of the zip's coordinates
    const { city, state, geopoint } = cityData;
    const cityObj = {};
    cityObj.city = city;
    cityObj.state = state;
    cityObj.geopoint = geopoint;
    return cityObj;
  })
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
      .then((res) => res.send(res.data.recipes));
  }
};

module.exports = {
  getMarketsInfo,
  getUserCoordinates,
  getRecipes,
};
