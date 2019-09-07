import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BackgroundImage from './components/BackgroundImage';
import Login from './components/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ingredients: [],
      view: 'login',
    }
  }
  render() { 
    return (<div className="App">
      <Login />
      <NavBar />
      <BackgroundImage />
    </div>);
  }
}
 
export default App;


