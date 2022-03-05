import React, { Component } from "react";
import Menu from "./Menu";

export class PizzaStore extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
    };
  }

  async componentDdMoiunt() {
    let url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ article: parsedData });
  }

  onDecrArranegement = () => {
    this.setState({
      article: this.state.article.sort((a, b) => (a.price > b.price ? 1 : -1)),
    });
  };
  onIncrArrangement = () => {
    this.setState({
      article: this.state.article.sort((a, b) => (a.price < b.price ? 1 : -1)),
    });
  };

  veg = () => {
    this.setState({
      article: this.state.article.filter((e) => {
        return e.isVeg === true;
      }),
    });
  };

  nonveg = () => {
    this.setState({
      article: this.state.article.filter((e) => {
        return e.isVeg === !true;
      }),
    });
  };

  render() {
    return (
      <div className="container my-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className=" text-center mb-4" style={{ margin: "20px 0" }}>
                Pizzeria-Delecious
              </h2>
            </div>
            <div className="col-6 col-md-4 my-4 ">
              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={this.onDecrArranegement}
              >
                <i className="bi bi-arrow-90deg-down"></i>
              </button>

              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={this.onIncrArrangement}
              >
                <i className="bi bi-arrow-90deg-up"></i>
              </button>

              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={this.nonveg}
              >
                <i className="bi bi-egg"></i>
              </button>
              <button
                type="button"
                className="btn btn-warning mx-2"
                onClick={this.veg}
              >
                <i className="bi bi-flower1"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4 mb-3" key={element.id}>
                <Menu
                  name={element.name}
                  description={element.description}
                  isVeg={element.isVeg}
                  rating={element.rating}
                  price={element.price}
                  imgUrl={element.img_url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PizzaStore;
