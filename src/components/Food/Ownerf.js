import React, { Component } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Form,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import "./food.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

class Ownerf extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.item_name.value;
            const price = this.item_price.value;
            const category = this.item_category.value;
            const url = this.item_url.value;
            const available = this.checkboxRef.checked ? 0 : 1;
            this.props.addFood(url, name, price, available, category);
          }}
        >
          <h1 style={{ marginTop: "1%", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            <b>Welcome Owner</b>
          </h1>
          <h4
            className="libraryhead4"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif", marginBottom:"1%" }}
          >
            Use this module to add new food items to the network
          </h4>
          <div class="sidenav">
            <div class="form-row">
              <div className="form-group form_components">
                <h5 className="form_components" style={{ textAlign: "center" }}>
                  Add New Food Items To Network
                </h5>
                <h6>Item Name</h6>
                <Form.Control
                  type="text"
                  style={{ width: "100%" }}
                  id="name"
                  required
                  disabled={this.props.canteenOwner != this.props.account}
                  placeholder="Enter: Item Name"
                  ref={(input) => {
                    this.item_name = input;
                  }}
                />
              </div>
              <div className="form-group form_components">
                <h6>Item Price</h6>
                <Form.Control
                  type="number"
                  style={{ width: "100%" }}
                  id="price"
                  step="any"
                  min="0"
                  disabled={this.props.canteenOwner != this.props.account}
                  required
                  placeholder="Enter: Item Price (ETH)"
                  ref={(input) => {
                    this.item_price = input;
                  }}
                />
              </div>
              <div className="form-group form_components">
                <h6>Item Category</h6>
                <Form.Control
                  type="text"
                  style={{ width: "100%" }}
                  id="category"
                  disabled={this.props.canteenOwner != this.props.account}
                  required
                  placeholder="Enter: Item Category"
                  ref={(input) => {
                    this.item_category = input;
                  }}
                />
              </div>
              <div className="form-group form_components">
                <h6>Item Image URL (*optional)</h6>
                <Form.Control
                  type="text"
                  style={{ width: "100%" }}
                  id="imageURL"
                  disabled={this.props.canteenOwner != this.props.account}
                  placeholder="Enter: Item Image URL"
                  ref={(input) => {
                    this.item_url = input;
                  }}
                />
              </div>
              <div className="form-group form_components">
                <h6 className="form-group form_components">
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      disabled={this.props.canteenOwner != this.props.account}
                      type="checkbox"
                      defaultChecked={true}
                      ref={(checked) => (this.checkboxRef = checked)}
                      label="Check if item is available now" />
                  </Form.Group>
                </h6>
              </div>
              <button
                type="submit"
                disabled={this.props.canteenOwner != this.props.account}
                className="btn btn-success col-md-1.5"
              >
                <b>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> &nbsp; Add Item &nbsp;{" "}
                </b>
              </button>
            </div>
          </div>
        </form>
        <div class="cardnav">
          <div class="card-group">
            {this.props.foods.map((foodItem, key) => {
              return (
                <Row>
                  <Col style={{ marginRight: "12px", marginLeft: "12px" }}>
                    <Card
                      className="card_sp"
                      // border="shadow"
                      style={{
                        width: "18rem",
                        height: "20rem",
                        textAlign: "center",
                        marginBottom: "2%",
                        borderRadius: "16px",
                      }}
                      key={key}
                    >
                      <Card.Body>
                        <Card.Img
                          variant="top"
                          className="card_sp_round_image"
                          style={{ height: "8rem", width: "46rem" }}
                          src={
                            foodItem.image.match(/\.(jpeg|jpg|gif|png)$/) !=
                            null
                              ? foodItem.image
                              : "https://imgur.com/QuzUb7b.jpg"
                          }
                         
                        />

                        <Card.Title
                          style={{
                            fontSize: "20px",
                            color: "black",
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                          }}
                        >
                          <b>{foodItem.name}</b>
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-1 text-muted"
                          style={{ fontSize: "16px" }}
                        >
                          {foodItem.available == 0
                            ? "available"
                            : "not available"}
                        </Card.Subtitle>
                        <Card.Text style={{ fontSize: "14px", height: "50px" }}>
                          {this.props.web3.utils.fromWei(foodItem.price)} ETH
                        </Card.Text>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="New Price"
                            aria-label="New Price"
                            type="Number"
                            min="0"
                            required="true"
                            disabled={
                              this.props.canteenOwner != this.props.account
                            }
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange}
                          />
                          <Button
                            disabled={
                              this.props.canteenOwner != this.props.account
                            }
                            onClick={() =>
                              this.props.priceChange(key, this.state.value)
                            }
                          >
                            Change Price
                          </Button>
                        </InputGroup>
                        <div style={{ textAlign: "center" }}>
                          <Button
                            style={{
                              fontSize: "1rem",
                              borderRadius: "10px",
                              margin: "2%",
                            }}
                            className="btn btn-warning"
                            disabled={
                              this.props.canteenOwner != this.props.account
                            }
                            onClick={() =>
                              this.props.availabilityChange(Number(key))
                            }
                          >
                            Change Availability &nbsp;{" "}
                            <FontAwesomeIcon icon={faExchangeAlt} />
                          </Button>

                          <Button
                            id="delete"
                            className="btn btn-danger"
                            style={{
                              fontSize: "1rem",
                              borderRadius: "10px",
                              margin: "1%",
                            }}
                            disabled={
                              this.props.canteenOwner != this.props.account
                            }
                            variant="danger btn-sm"
                            onClick={() => this.props.deleteItem(Number(key))}
                          >
                            Delete Item &nbsp;{" "}
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Ownerf;
