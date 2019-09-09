import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import IngredientList from "./components/IngredientList.jsx";

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
        {/* <Login /> */}
        <IngredientList />
      </div>
    );
  }
}

export default App;
