import React, { Component } from "react";
import "./ownerstyle.css";
class Ownerf extends Component {
  render() {
    return (
      <div className="container-fluid mt-1 text-center">
        <h2>Hello Owner</h2>
        <form
          className="form-horizontal itemform"
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.item_name.value;
            const price = this.item_price.value;
            const category = this.item_category.value;
            const url =this.item_url.value;
            const available = this.checkboxRef.checked ? 0 : 1;
            this.props.addFood(url, name, price, available, category);
          }}
        >
          <div className="sidenav2">
            <div className="form_componentsf">
              <h5 style={{ textAlign: "center", marginBottom: "3%" }}>
                Add new food
              </h5>
              <h6>Enter Item name</h6>
              <input
                type="text"
                id="name"
                required
                disabled={this.props.canteenOwner != this.props.account}
                placeholder="Item name"
                ref={(input) => {
                  this.item_name = input;
                }}
              />
            </div>
            <div className="form-group form_componentsf">
              <h6>Enter Item Price</h6>
              <input
                type="number"
                id="price"
                disabled={this.props.canteenOwner != this.props.account}
                required
                min="0"
                placeholder="Price"
                ref={(input) => {
                  this.item_price = input;
                }}
              />
            </div>
            <div className="form-group form_componentsf">
              <h6>Enter Item Category</h6>
              <input
                type="text"
                id="category"
                disabled={this.props.canteenOwner != this.props.account}
                required
                placeholder="Category"
                ref={(input) => {
                  this.item_category = input;
                }}
              />
            </div>
            <div className="form-group form_componentsf">
              <h6>Enter image URL</h6>
              <input
                type="text"
                id="category"
                disabled={this.props.canteenOwner != this.props.account}
                required
                placeholder="Image URL"
                ref={(input) => {
                  this.item_url = input;
                }}
              />
            </div>
            <h6 className="form-group form_componentsf">
              Availability:
              <input
                type="checkbox"
                id="available"
                disabled={this.props.canteenOwner != this.props.account}
                defaultChecked={true}
                ref={(checked) => (this.checkboxRef = checked)}
              />
            </h6>
            <button type="submit" disabled={this.props.canteenOwner != this.props.account} className="btn btn-success col-md-1.5">
              <b>Add Item&nbsp;</b>
            </button>
          </div>
        </form>
        <div className="food_dishes">
          {this.props.foods.map((foodItem, key) => {
            return (
              <div className="card-deck">
                <div class="card" style={{width: "15rem"}}>
                  <img className="card-img-top" src={foodItem.image} alt="Food-dish image" />
                  <div class="card-body">
                    <h6 class="card-title">{foodItem.name}</h6>
                    <h5 class="card-subtitle text-muted">
                      {foodItem.available == 0 ? "available" : "not available"}
                    </h5>
                    <p>
                      <strong>Price:</strong> {foodItem.price}
                    </p>
                    <form
                      className="form-horizontal"
                      onSubmit={(event) => {
                        event.preventDefault();
                        const price = this.price.value;
                        this.props.priceChange(Number(key), price);
                      }}
                    >
                      <input
                        type="number"
                        className="col-md-6"
                        name="price"
                        disabled={this.props.canteenOwner != this.props.account}
                        required
                        min="0"
                        placeholder="New Price"
                        ref={(input) => {
                          this.price = input;
                        }}
                      />
                      <button
                        type="submit"
                        disabled={this.props.canteenOwner != this.props.account}
                        className="btn btn-outline-success food-item-buttons"
                      >
                        Set
                      </button>
                    </form>
                    <button
                      type="submit"
                      disabled={this.props.canteenOwner != this.props.account}
                      className="btn btn-outline-dark food-item-buttons"
                      onClick={() => {
                        this.props.availabilityChange(Number(key));
                      }}
                    >
                      Change Availability
                    </button>
                    <button
                      type="submit"
                      disabled={this.props.canteenOwner != this.props.account}
                      className="btn btn-outline-danger food-item-buttons"
                      onClick={() => {
                        this.props.deleteItem(Number(key));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Ownerf;
