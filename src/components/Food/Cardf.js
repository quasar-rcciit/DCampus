import React from "react";

export default class Cardf extends React.Component {
  render() {
    return (
      <div className="food_dishes card-deck">
        <div
          class="card"
          style={{ width: "15rem", margin: "4rem"}}
        >
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80"
            class="card-img-top"
            alt="dish image"
          />
          <div class="card-body card-block">
            <h6 class="card-title">{this.props.title}</h6>
            <h5 class="card-subtitle mb-2 text-muted">
              {this.props.dish_name}
            </h5>
            <p class="card-text">{this.props.dish_description}</p>
            <p>
              <strong>Price:</strong> Rs.{this.props.dish_price}
            </p>
            <button className="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    );
  }
}
