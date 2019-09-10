import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Landing from "./components/Landing.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { baseUrl } from "./constants.js";
import IngredientList from "./components/IngredientList.jsx";
import MarketMap from "./components/MarketMap.jsx";
import MarketList from "./components/MarketList.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      view: "login",
      loading: true,
      isAuthenticated: false,
      user: null
    };
    this.getUserDetails = this.getUserDetails.bind(this);
    this.setAuthentication = this.setAuthentication.bind(this);
  }

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails() {
    // get the user's token from sessionStorage
    const token = sessionStorage.getItem("token");
    // if they don't have a token:
    if (!token) {
      // set loading to false (this should re-render the page) and the user to unAuthenticated
      this.setState({ loading: false, isAuthenticated: false });
      return;
    }
    /*  if the user has a token, send the token to the server (see line 96 in routes/Users.js).
        Response should have req.body which contains the user's credentials, allowing them
        access to their user-specific private routes */
    axios
      .get(`${baseUrl}/api/user`, { headers: { "X-TOKEN": token } })
      .then(response => {
        // add req.body to the user's state, re-render the page, and set them to Authenticated
        this.setState({
          user: response.data,
          loading: false,
          isAuthenticated: true
        });
      })
      // if err, re-render the page but keep the user un-Authenticated
      .catch(err => {
        this.setState({ loading: false, isAuthenticated: false });
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
    const { loading, isAuthenticated, user } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App container-fluid m-0 p-0">
        <NavBar />
        <MarketList />
        {/* <IngredientList ingredients={this.state.ingredients} /> */}
        {/* switch between login, signup, and landing views with login component displayed on home page */}
        {/* NOTE: Add profile and recipe routes (using PrivateRoute component) here when they're made! */}
        <Switch>
          {/* the following six lines prevent a logged-in user from seeing the login/signup pages */}
          <Route
            exact
            path="/signup"
            render={routeProps => {
              return !isAuthenticated ? (
                <Signup {...routeProps} />
              ) : (
                <Redirect to="/landing" />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={routeProps => {
              return !isAuthenticated ? (
                <Login {...routeProps} />
              ) : (
                <Redirect to="/landing" />
              );
            }}
          />
          {/* pass down the following props to PrivateRoute which should conditionally render the landing page*/}
          <PrivateRoute
            path="/landing"
            isAuthenticated={isAuthenticated}
            user={user}
            component={Landing}
            setAuth={this.setAuthentication}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
