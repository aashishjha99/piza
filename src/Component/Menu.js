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
            <li className="list-group-item border-0">
              <h6>
                Cost: <span className="mx-2">&#x20B9;{price}</span>
              </h6>
            </li>
            <li className="list-group-item border-0 ">
              <h6>Rating: {rating}/5</h6>
            </li>
            <li className="list-group-item border-0">
              <h6>
                Type:{" "}
                <span className="badge bg-secondary mx-2">
                  <b>{isVeg ? "VEG" : "NON VEG"}</b>
                </span>
              </h6>
            </li>
            <div className="mx-3">
              <h6 className="mb-2">Size: </h6>
              <div className="size- mb-2">
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Medium
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Small
                  </label>
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Large
                  </label>
                </div>
              </div>
            </div>
          </ul>
          <div className="card-body bgcolor ">
            {/* <a
              href="/"
              className="card-link bor  "
              style={{ color: "black" }}
            ></a> */}
            <button
              className="bgcolor"
              style={{ height: "62px", width: "150px" }}
            >
              <i class="bi bi-bag-plus-fill mx-5"></i>
            </button>
            <div class="vr" style={{ height: "1rem" }}></div>
            {/* <a href="/" className="card-link bor" style={{ color: "black" }}>
              Toppings
            </a> */}
            <button
              className="mx-4 bgcolor  "
              style={{ height: "62px", width: "150px" }}
            >
              Toppings
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
