// // import all of the models from database-helpers/index.js
// const {
//   Users, favRecipes, UsersRecipes, Regions, Seasons, RegionsSeasons, Ingredients,
//   AvailableIngredients,
// } = require('./index.js');

// // store the user info in the Users model if it doesn't already exist
// const saveUserInfo = (req, res) => Users.findOrCreate({
//   // need to save a user's zipcode and use that zipcode to find their region
// });


// // get the signed-in user's info from the Users model
// const getUserInfo = (req, res) => Users.findOne()
//   .then(userInfo => {

//   })
//   .catch(err => console.error('Error retrieving user data, err'));


// // store a favorited recipe in the favRecipes model if it doesn't already exist
// const saveUserRecipe = (req, res) => favRecipes.findOrCreate({
//   // need to also store a reference in the recipe_id field of the usersRecipes join table
// });


// // delete a favorited receipr in the favReceipes model
// const deleteUserRecipe = (req, res) => {
//   // need to also delete the associated reference in the usersRecipes join table
// };


// // get all of a user's favorited recipes
// const getAllUserRecipes = (req, res) => {
//   // need to reference usersRecipes to find the user
// };


// // get all of the in-season produce based on region
// const getAllInSeasonProduce = (req, res) => {

// };


// // change a user's username
// const changeUsername = (req, res) => {

// };


// // change a user's location
// const changeUserLocation = (req, res) => {
//   // need to change a user's zipcode and region_id
// };


// module.exports = {
//   saveUserInfo,
//   getUserInfo,
//   saveUserRecipe,
//   deleteUserRecipe,
//   getAllUserRecipes,
//   getAllInSeasonProduce,
//   changeUsername,
//   changeUserLocation,
// };
