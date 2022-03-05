import React, { Component } from "react";
import "./Menu.css";

export class Menu extends Component {
  render() {
    let { name, description, imgUrl, price, rating, isVeg } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "25rem" }}>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "266px", width: "398px" }}
          />
          <div className="card-body border-0">
            <h5 className="card-title">{name}</h5>
            <p className="card-text ">{description}</p>
          </div>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item border-0">Cost: &#x20B9;{price}</li>
            <li className="list-group-item border-0">Rating: {rating}/5</li>
            <li className="list-group-item border-0">
              <h6>
                Type:{" "}
                <span className="badge bg-secondary">
                  <b>{isVeg ? "VEG" : "NON VEG"}</b>
                </span>
              </h6>
            </li>
          </ul>
          <div className="card-body bgcolor">
            <a href="/" className="card-link bor " style={{ color: "black" }}>
              <i class="bi bi-bag-plus-fill"></i>
            </a>
            <a href="/" className="card-link bor" style={{ color: "black" }}>
              Toppings
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
