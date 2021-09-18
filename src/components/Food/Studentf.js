import React, { Component } from 'react';

class studentf extends Component
{
  render() {
    return(
      <div className="food_dishes">
      {this.props.foods.map((foodItem, key) => {
        return (
          <div className="food_dishes card-deck">
            <div
              class="card"
              style={{ width: "18rem", margin: "4rem"}}
              >
              <div class="card-body card-block">
                <h6 class="card-title">{foodItem.name}</h6>
                <h5 class="card-subtitle mb-2 text-muted">
                  {foodItem.available==0?"available":"not available"}
                </h5>
                <p class="card-text">{"Category: "+foodItem.category}</p>
                <p>
                  <strong>Price:</strong> {foodItem.price}
                </p>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const number = this.t_or_r_no.value;
                    const hostelOrCanteen = this.checkboxRef.checked ? 0 : 1;
                    console.log(hostelOrCanteen);
                    this.props.order(Number(key), Number(hostelOrCanteen), Number(number));
                    }}>
                <label>
                  Check if you want your food in hostel:
                  <input
                    type="checkbox"
                    id="hostelOrCanteen"
                    defaultChecked={true}
                    ref={(checked) => this.checkboxRef = checked}/>
                  </label>
                  <input 
                    type="number"
                    id="t_or_r_no"
                    min="0"
                    placeholder="Table (or Room) no."
                    ref={(input) => {
                      this.t_or_r_no = input;
                    }} />
                  <button type="submit" className="btn btn-primary">Order</button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    );
  }
}

export default studentf;
