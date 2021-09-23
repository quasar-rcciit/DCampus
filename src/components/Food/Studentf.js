import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./food.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

class studentf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostelChecked: false,
      canteenChecked: false,
      hostelOrCanteen: 0,
      number: 0,
      quantity: 0,
    };
    this.handleCheckHostel = this.handleCheckHostel.bind(this);
    this.handleCheckCanteen = this.handleCheckCanteen.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  handleCheckHostel(event) {
    var check = this.state.hostelChecked;
    this.setState({ hostelChecked: !check });
    this.setState({ hostelOrCanteen: 0 });
    console.log(this.hostelOrCanteen);
  }

  handleCheckCanteen(event) {
    var check = this.state.canteenChecked;
    this.setState({ canteenChecked: !check });
    this.setState({ hostelOrCanteen: 1 });
  }

  handleChangeNumber(event) {
    this.setState({ number: event.target.value });
  }

  handleChangeQuantity(event) {
    this.setState({ quantity: event.target.value });
  }

  render() {
    return (
      <>
        <h2
          style={{
            marginBottom: "5%",
            textAlign: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
          }}
        >
          Order Food
        </h2>
        <div className="container-fluid mt-5 text-center">
          <div class="card-group">
            {this.props.foods.map((foodItem, key) => {
              return (
                <Row>
                  <Col style={{ marginRight: "10px", marginLeft: "10px" }}>
                    <Card
                      className="card_sp w-95"
                      style={{
                        width: "16rem",
                        height: "24rem",
                        textAlign: "center",
                        marginBottom: "2%",
                        borderRadius: "16px",
                        boxShadow:"0 4px 8px 0 #f2f1f1, 0 6px 5px 0 rgba(0, 0, 0, 0.19)"
                      }}
                      key={key}
                    >
                      <Card.Img
                      className="card_sp_round_image_food"
                      variant="top"
                        src={
                          foodItem.image.match(/\.(jpeg|jpg|gif|png)$/) != null
                            ? foodItem.image
                            : "https://images.squarespace-cdn.com/content/v1/5c484f81e2ccd1a693aede65/1548432147844-YRT7JI9EMGHOKH731DSX/junk-food-square.jpg"
                        }                        
                        style={{ height: "auto"}}
                      />

                      <Card.Body>
                        
                       
                          <Card.Title
                            style={{
                              fontSize: "17px",
                              color: "black",
                              fontFamily: "'Be Vietnam Pro', sans-serif",
                              marginTop:"4%"
                            }}
                          >
                           <div className="invert"> <b>{foodItem.name.substring(0, 46)}</b></div>
                          </Card.Title>

                          {/* ======================== Author  */}
                          <Card.Subtitle
                            className="mb-1 text-muted"
                            style={{ fontSize: "14px" }}
                          >
                            Price:{" "}
                            {this.props.web3.utils.fromWei(foodItem.price)} ETH
                          </Card.Subtitle>

                          <form
                            onSubmit={(event) => {
                              event.preventDefault();
                              console.log(
                                Number(key),
                                this.state.quantity,
                                this.state.hostelOrCanteen,
                                this.state.number
                              );
                              this.props.order(
                                key,
                                Number(this.state.quantity),
                                this.state.hostelOrCanteen,
                                Number(this.state.number)
                              );
                            }}
                          >
                            <h5
                              class="card-subtitle text-muted"
                              style={{ textAlign: "center", fontSize: "12px" }}
                            >
                              Where do you want to get your food?
                            </h5>
                            <ButtonGroup
                              className="me-2"
                              aria-label="First group"
                            >
                              <Button
                                id="hostel"
                                variant={
                                  this.state.hostelChecked
                                    ? "primary"
                                    : "primary"
                                }
                                onClick={() => {
                                  this.setState({ hostelOrCanteen: 0 });
                                  console.log(this.hostelOrCanteen);
                                }}
                                disabled={
                                  foodItem.available == 1 ||
                                  this.props.canteenOwner == this.props.account
                                }
                              >
                                Hostel
                              </Button>
                              <Button
                                id="canteen"
                                variant={
                                  this.state.canteenChecked
                                    ? "success"
                                    : "primary"
                                }
                                onClick={() => {
                                  this.setState({ hostelOrCanteen: 1 });
                                  console.log(this.hostelOrCanteen);
                                }}
                                disabled={
                                  foodItem.available == 1 ||
                                  this.props.canteenOwner == this.props.account
                                }
                              >
                                Canteen
                              </Button>
                            </ButtonGroup>
                            <h5
                              class="card-subtitle text-muted"
                              style={{ textAlign: "center", marginBottom:"2%" }}
                            >
                              Enter Table (or Room) no.
                            </h5>
                            <Form.Control
                              type="number"
                              className="col-md-6"
                              id="t_or_r_no"
                              placeholder="Room (or Table) no."
                              disabled={
                                foodItem.available == 1 ||
                                this.props.canteenOwner == this.props.account
                              }
                              min="0"
                              onChange={this.handleChangeNumber}
                            />
                            <h5 class="card-subtitle text-muted" style={{ textAlign: "center", marginBottom:"2%" }}>
                              Order Quantity (*optional):
                            </h5>
                            <Form.Control
                              type="number"
                              className="col-md-6"
                              id="quantity"
                              min="1"
                              required
                              placeholder="Default is 1"
                              disabled={
                                foodItem.available == 1 ||
                                this.props.canteenOwner == this.props.account
                              }
                              onChange={this.handleChangeQuantity}
                            />
                            <Button
                              variant="success"
                              type="submit"
                              style={{ marginTop: "5%" }}
                              disabled={
                                foodItem.available == 1 ||
                                this.props.canteenOwner == this.props.account
                              }
                            >
                              Order
                            </Button>
                          </form>                        
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default studentf;
