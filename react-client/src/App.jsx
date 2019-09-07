import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BackgroundImage from './components/BackgroundImage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<div className="App">
      <NavBar />
      <BackgroundImage />
    </div>);
  }
}

export default App;


