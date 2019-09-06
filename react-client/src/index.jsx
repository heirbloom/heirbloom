import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

// Functions will go here

  render() { 
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;