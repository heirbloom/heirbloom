import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      view: "login"
    };
  }
  render() {
    return (
      <div className="App container-fluid m-0 p-0">
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default App;
