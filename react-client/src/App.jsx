import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import IngredientList from "./components/IngredientList.jsx";
import MarketList from "./components/MarketList.jsx";
import FavRecipes from "./components/FavRecipes.jsx";
import Profile from "./components/Profile.jsx";
import RecipeList from "./components/RecipeList.jsx";
import Swal from "sweetalert2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favRecipes: [],
      ingredients: [],
      userLocation: [],
      localMarkets: [],
      sessionZipcode: null,
      loading: true,
      isAuthenticated: false,
      // when a user logs in, a user object is attached to their session (the user object is needed to access any PrivateRoutes)
      // the user object has the user's username, email, zipcode and database id
      // user is currently available in all components but make sure to pass it down to any new component you make
      user: null
    };
    this.getUserDetails = this.getUserDetails.bind(this);
    this.getLocalIngredients = this.getLocalIngredients.bind(this);
    this.setAuthentication = this.setAuthentication.bind(this);
    this.getMarketData = this.getMarketData.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.handleRecipes = this.handleRecipes.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.getFavRecipes = this.getFavRecipes.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  componentDidMount() {
    this.getUserDetails();
  }

  handleUserUpdate(updatedUser) {
    axios
      .put(`/api/updateUser`, updatedUser)
      .then(response => {
        this.setState({
          user: { ...this.state.user, ...updatedUser }
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getUserDetails() {
    // get the user's token from sessionStorage
    const token = sessionStorage.getItem("token");
    // if they don't have a token:
    if (!token) {
      // set loading to false (this should re-render the login page) and set the user to unAuthenticated
      this.setState({ loading: false, isAuthenticated: false });
      return;
    }
    /*  if the user has a token, send the token to the server to authorize the user 
    Response should have the user object which contains the user's credentials, allowing them
    access to their user-specific private routes */
    axios
      .get(`/api/user`, { headers: { "X-TOKEN": token } })
      .then(response => {
        // after the user is authenticated, send the following requests passing in the user's user object
        this.getMarketData(response.data);
        this.getUserLocation(response.data);
        this.getLocalIngredients(response.data);
        // this.getFavRecipes(response.data);
      })
      // if err, re-render the page but keep the user un-Authenticated
      .catch(err => {
        this.setState({ loading: false, isAuthenticated: false });
        console.error(err);
      });
  }

  // request to server to send an api call to get the user's location and populate the userLocation array in App's state
  getUserLocation(user) {
    axios
      .post(`/api/usercoords`, user)
      .then(res => {
        this.setState({
          user,
          loading: false,
          isAuthenticated: true,
          userLocation: res.data,
          sessionZipcode: user.zipcode
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // request to server to query the database for local veggies and populate the ingredients array in App's state
  getLocalIngredients(user) {
    axios
      .post(`/api/localIngredients`, user)
      .then(res => {
        this.setState({
          ingredients: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // request to server to send an Api call to usdaMarket api and add the market data to the localMarkets array in App's state
  getMarketData(user) {
    axios
      .post(`/api/usdaResponse`, user)
      .then(res => {
        this.setState({
          localMarkets: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // request to server to query the database for a user's favorite recipes and then populate favRecipes array in App's state
  getFavRecipes(user) {
    axios
      .post(`/api/getFavRecipes`, user)
      .then(response => {
        // console.log('FAV RECIPES!!!', response.data);
        this.setState({
          favRecipes: response.data.fav_recipes
        });
      })
      .catch(err => console.log(err));
  }

  // request to server to get recipes using a selectedIngredient and then populate the recipes array in App's state
  handleRecipes(selectedIngredient) {
    return axios
      .post(`/api/recipes`, selectedIngredient)
      .then(response => {
        this.setState({
          recipes: response.data.recipes
        });
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  // request to server to add a recipe to the database
  addToFavorites(selectedRecipe) {
    const recipeName = selectedRecipe[0];
    return axios
      .post(`/api/saveFavRecipe`, selectedRecipe)
      .then(response => {
        Swal.fire(`${recipeName} was added to your favorites.`);
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  // request to server to delete a favorited recipe to the database
  removeFromFavorites(selectedRecipe) {
    // console.log("FAVORITE RECIPE:", selectedRecipe);
    // selectedRecipe is an array ([recipe hyperlink , recipe name, recipe image, recipe id in the db])
    const recipeName = selectedRecipe[1];
    const deletedRecipeId = selectedRecipe[3];
    return axios
      .post(`/api/removeFavRecipe`, selectedRecipe)
      .then(response => {
        this.setState({
          favRecipes: this.state.favRecipes.filter(
            recipe => recipe.id !== deletedRecipeId
          )
        });
        Swal.fire(`${recipeName} was removed from your favorites.`);
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  // this should persist the user's authentication until they log-out
  setAuthentication(isLoggedIn) {
    if (
      isLoggedIn &&
      !!sessionStorage.getItem("token") &&
      !this.state.isAuthenticated
    ) {
      this.getUserDetails();
    }
  }

  render() {
    const {
      loading,
      isAuthenticated,
      user,
      ingredients,
      localMarkets,
      userLocation,
      favRecipes,
      recipes,
      sessionZipcode
    } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App container-fluid m-0 p-0">
        {/* switch between login, signup, and private views with login component displayed on home page */}
        <Switch>
          {/* the following two Routes prevent a logged-in user from seeing the login/signup pages */}
          <Route
            exact
            path="/signup"
            render={routeProps => {
              return !isAuthenticated || !sessionStorage.getItem("token") ? (
                <Signup {...routeProps} />
              ) : (
                <Redirect to="/ingredient-list" />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={routeProps => {
              return !isAuthenticated || !sessionStorage.getItem("token") ? (
                <Login {...routeProps} getUserDetails={this.getUserDetails} />
              ) : (
                <Redirect to="/ingredient-list" />
              );
            }}
          />
          {/* pass the following components to PrivateRoute to make them 'private'*/}
          {/* NOTE: if you need to pass props down to any of these components, pass it to the PrivateRoute
          component first (see line 34 in PrivateRoute.jsx). */}
          <PrivateRoute
            path="/ingredient-list"
            ingredients={ingredients}
            userLocation={userLocation}
            isAuthenticated={isAuthenticated}
            sessionZipcode={sessionZipcode}
            user={user}
            component={IngredientList}
            setAuth={this.setAuthentication}
            handleRecipes={this.handleRecipes}
          />
          <PrivateRoute
            path="/market-list"
            localMarkets={localMarkets}
            userLocation={userLocation}
            sessionZipcode={sessionZipcode}
            isAuthenticated={isAuthenticated}
            user={user}
            component={MarketList}
            setAuth={this.setAuthentication}
          />
          <PrivateRoute
            path="/profile"
            userLocation={userLocation}
            localMarkets={localMarkets}
            isAuthenticated={isAuthenticated}
            user={user}
            component={Profile}
            setAuth={this.setAuthentication}
            handleUserUpdate={this.handleUserUpdate}
          />
          <PrivateRoute
            path="/fav-recipes"
            favRecipes={favRecipes}
            localMarkets={localMarkets}
            isAuthenticated={isAuthenticated}
            user={user}
            component={FavRecipes}
            setAuth={this.setAuthentication}
            getFavRecipes={this.getFavRecipes}
            removeFromFavorites={this.removeFromFavorites}
          />
          <PrivateRoute
            path="/recipe-list"
            recipes={recipes}
            userLocation={userLocation}
            isAuthenticated={isAuthenticated}
            user={user}
            component={RecipeList}
            setAuth={this.setAuthentication}
            addToFavorites={this.addToFavorites}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
