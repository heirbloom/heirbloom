import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import NavBar from './components/NavBar';
import BackgroundImage from './components/BackgroundImage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { baseUrl } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ingredients: [],
      view: 'login',
      loading: true,
      isAuthenticated: false
    }
  }

  componentDidMount() {
    // when app has mounted, get the user's token from sessionStorage
    const token = sessionStorage.getItem('token');
    // if they don't have a token:
    if(!token) {
      // set loading to false (this should re-render login) and the user to unAuthenticated 
      this.setState({loading: false, isAuthenticated: false });
      return;
    }
    // if the user has a token, send a get request to their private route (see line 96 in routes/Users.js)
    // this should provide the user with their login credentials/token to allow access to private routes
    axios.get(`${baseUrl}/api/user`, {headers: { 'X-TOKEN': token }})
      .then((user) => {
        this.setState({loading: false, isAuthenticated: true})
        console.log('=====', user)
      })
      // if err, re-render the login but keep the user un-Authenticated
      .catch((err) => {
        this.setState({ loading: false, isAuthenticated: false })
      })
  }
  
  render() {
    const { loading, isAuthenticated } = this.state;
    if (loading) {
      return <div>Loading...</div>
    } 
    return (<div className="App">
      <NavBar />
      {/* switch between login, signup, and profile views with login component displated on home page */}
      {/* NOTE: Add landing page here when that is made!!! */}
      <Switch>
        <Route exact path="/signup" component={Signup} />
        {/* if user is authnticated, render Profile page, else, redirect to home which has the Login component */}
        <Route exact path="/profile" render={(routeProps) => {
          return isAuthenticated ? <Profile {...routeProps} /> : <Redirect to="/" />
        }} />
        <Route exact path="/" component={Login} />
      </Switch>
      <BackgroundImage />
    </div>);
  }
}

export default App;


