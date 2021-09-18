import React, { Component } from 'react';

class Ownerf extends Component
{
  render() {
    return(
      <>
        <h1>Hello Owner</h1>
        <form className="form-horizontal"
          onSubmit={(event) => {
          event.preventDefault();
          const name = this.item_name.value;
          const price = this.item_price.value;
          const category = this.item_category.value;
          const available = this.checkboxRef.checked ? 0 : 1;
          console.log(available);
          this.props.addFood(name, price, available, category);
          }}>
          <input 
            type="text"
            id="name"
            required
            placeholder="Item name"
            ref={(input) => {
              this.item_name = input;
            }} />
          <input 
            type="number"
            id="price"
            required
            min="0"
            placeholder="Price"
            ref={(input) => {
              this.item_price = input;
            }} />
          <input 
            type="text"
            id="category"
            required
            placeholder="Category"
            ref={(input) => {
              this.item_category = input;
            }} />
          <label>
            Availability:
            <input
              type="checkbox"
              id="available"
              defaultChecked={true}
              ref={(checked) => this.checkboxRef = checked}/>
          </label>
          <br></br>
          <button
            type="submit"
            className="btn btn-outline-dark my-3"
          >
          Add Food!
          </button>
        </form>
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
                  <p>
                    <strong>Price:</strong> {foodItem.price}
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => {this.props.deleteItem(Number(key))}}>
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={()=>{this.props.availabilityChange(Number(key))}}>
                    Change Availability
                  </button>
                  <form className="form-horizontal"
                    onSubmit={(event) => {
                    event.preventDefault();
                    const price = this.price.value;
                    this.props.priceChange(Number(key), price)}}>
                    <input 
                      type="number"
                      name="price"
                      required
                      min="0"
                      placeholder="Change food item price"
                      ref={(input) => {
                        this.price = input;
                      }} />
                    <button
                      type="submit"
                      className="btn btn-primary">
                      Change Price
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </>
    );
  }
}

export default Ownerf;
