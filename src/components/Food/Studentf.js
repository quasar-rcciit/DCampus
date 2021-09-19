import React, { Component } from "react";
import "./ownerstyle.css";

class studentf extends Component {
  render() {
    return (
      <div className="container-fluid mt-1 text-center">
        <h2>Order food</h2>
        <form
          className="form-horizontal itemform"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="sidenav2">
            <div className="form_componentsf">
              <h5 style={{ textAlign: "center", marginBottom: "3%" }}>
                Previous Orders
              </h5>
            </div>
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
                    <p>
                      <strong>Price:</strong> {foodItem.price}
                    </p>
                    <form
                      className="form-horizontal"
                      onSubmit={(event) => {
                        event.preventDefault();
                        const number = this.t_or_r_no.value;
                        const hostelOrCanteen = this.checkboxRef.checked ? 0 : 1;
                        this.props.order(Number(key), Number(hostelOrCanteen), Number(number));
                      }}
                    >
                      <label>
                        Check if you want your food in hostel:
                        <input
                          type="checkbox"
                          id="hostelOrCanteen"
                        disabled={foodItem.available==1 || this.props.canteenOwner == this.props.account}
                          defaultChecked={true}
                          ref={(checked) => this.checkboxRef = checked}/>
                      </label>
                      <h5 class="card-subtitle text-muted">
                        Enter Table (or Room) no.
                      </h5>
                      <input 
                        type="number"
                        className="col-md-6"
                        id="t_or_r_no"
                        disabled={foodItem.available==1 || this.props.canteenOwner == this.props.account}
                        min="0"
                        ref={(input) => {
                          this.t_or_r_no = input;
                        }} />
                      <button
                        type="submit"
                        disabled={foodItem.available==1 || this.props.canteenOwner == this.props.account}
                        className="btn btn-primary">
                          Order
                      </button>
                    </form>
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

export default studentf;
