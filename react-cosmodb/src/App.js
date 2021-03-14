import React, { Component } from "react";
import "./App.css";

import Pets from "./components/Pets";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pets</h1>
        <div className="header-bar" />
        <app-heroes />
        <Pets />
      </div>
    );
  }
}

export default App;