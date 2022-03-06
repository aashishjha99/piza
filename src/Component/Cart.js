import React, { Component } from "react";
import "./cart.css";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-4 ">
            {" "}
            <span className="order">Order</span>
          </div>
          <div class="col-md-4 offset-md-4">
            <button type="button" className="btn">
              <p className="dot"> 7</p>
              <i class="bi bi-cart fa-3x size" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
