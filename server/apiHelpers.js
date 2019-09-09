const axios = require('axios');

const getMarketsInfo = (zip) => {
  return axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`)
    .then((res) => 8res.data.results.map((market) => axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${market.id}`)))
    .then((promArray) => axios.all(promArray))
    .catch((err) => console.log(err));
};

module.exports = {
  getMarketsInfo,
};
