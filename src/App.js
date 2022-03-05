import "./App.css";

import React, { Component } from "react";
import Nav from "./Component/Nav";
import PizzaStore from "./Component/PizzaStore";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <PizzaStore />
      </div>
    );
  }
}
