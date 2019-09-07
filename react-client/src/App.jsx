import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<div className="App">
      <NavBar />
    </div>);
  }
}
 
export default App;


