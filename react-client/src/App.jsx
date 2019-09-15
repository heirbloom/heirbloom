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
import { baseUrl } from "./constants.js";
import Context from './contexts/Context.jsx';
// import { toggle } from './components/ProfileModal';


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
      marketCoordinates: [],
      loading: true,
      isAuthenticated: false,
      user: null
    };
    this.getUserDetails = this.getUserDetails.bind(this);
    this.getLocalIngredients = this.getLocalIngredients.bind(this);
    this.setAuthentication = this.setAuthentication.bind(this);
    this.getMarketData = this.getMarketData.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.handleRecipes = this.handleRecipes.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
  }

  componentDidMount() {
    this.getUserDetails();
  }

  handleUserUpdate(updatedUser) {
    //
    axios
      .put(`${ baseUrl }/api/updateUser`, updatedUser)
      .then(response => {
        console.log(response);
      })
      .then(
        this.toggle()
      )
      .catch(err => {
        console.error(err);
      })
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
    /*  if the user has a token, send the token to the server (see line 96 in routes/Users.js).
    Response should have req.body which contains the user's credentials, allowing them
    access to their user-specific private routes */
    axios
      .get(`${baseUrl}/api/user`, { headers: { "X-TOKEN": token } })
      .then(response => {
        // add the fetched data from post request to usdaMarket api to the user's state
        this.getMarketData(response.data);
        this.getUserLocation(response.data);
        this.getLocalIngredients(response.data);
      })
      // if err, re-render the page but keep the user un-Authenticated
      .catch(err => {
        this.setState({ loading: false, isAuthenticated: false });
        console.error(err);
      });
  }

  getUserLocation(user) {
    // send a POST request to usdaMarket api and add the market data to the user's state (App.jsx)
    axios
      .post(`${baseUrl}/api/usercoords`, user)
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

  getLocalIngredients(user) {
    // send a POST request to server to query the database for local veggies
    axios
      .post(`${baseUrl}/api/localIngredients`, user)
      .then(res => {
        this.setState({
          user,
          loading: false,
          isAuthenticated: true,
          ingredients: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getMarketData(user) {
    // send a POST request to usdaMarket api and add the market data to the user's state (App.jsx)
    axios
      .post(`${baseUrl}/api/usdaResponse`, user)
      .then(res => {
        this.setState({
          localMarkets: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleRecipes(selectedIngredient) {
    // console.log('I CHOOSE YOU:', selectedIngredient);
    return axios
      .post(`${baseUrl}/api/recipes`, selectedIngredient)
      .then(response => {
        console.log('Recipes response', response.data.recipes);
        this.setState({
          recipes: response.data.recipes
        });
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  addToFavorites(selectedRecipe) {
    console.log('FAVORITE RECIPE:', selectedRecipe);
    return axios
      .post(`${baseUrl}/api/favRecipes`, selectedRecipe)
      .then(response => {
        console.log('Favorites response', response.data);
        this.setState({
          favRecipes: response.data
        });
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  setAuthentication(isLoggedIn) {
    // this should persist the user's authentication until they log-out
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
      marketCoordinates,
      userLocation,
      favRecipes,
      recipes,
      sessionZipcode
    } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }
    // console.log("=======state", this.state);

    // this object will be passed to any Context.Consumer component
    const contextValues = {
      handleRecipes: this.handleRecipes,
      addToFavorites: this.addToFavorites
    }

    return (
      <Context.Provider value={contextValues}>
      <div className="App container-fluid m-0 p-0">
        {/* <IngredientList ingredients={this.state.ingredients} /> */}
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
          {/* pass down the following props to PrivateRoutes*/}
          <PrivateRoute
            path="/ingredient-list"
            ingredients={ingredients}
            userLocation={userLocation}
            isAuthenticated={isAuthenticated}
            sessionZipcode={sessionZipcode}
            user={user}
            component={IngredientList}
            setAuth={this.setAuthentication}
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
          />
          <PrivateRoute
            path="/fav-recipes"
            favRecipes={favRecipes}
            localMarkets={localMarkets}
            isAuthenticated={isAuthenticated}
            user={user}
            component={FavRecipes}
            setAuth={this.setAuthentication}
          />
          <PrivateRoute
            path="/recipe-list"
            recipes={recipes}
            userLocation={userLocation}
            isAuthenticated={isAuthenticated}
            user={user}
            component={RecipeList}
            setAuth={this.setAuthentication}
          />
        </Switch>
      </div>
      </Context.Provider>
    );
  }
}

export default App;
