import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";
import "./adminstyle.css";

class Adminf extends Component {
  render() {
    console.log("undefined");
    return (
      <div>
        <div className="container-fluid mt-5 text-center">
          {/* <h3>Change Commision Percentage</h3> */}
          {/* <div>{rvalue} %</div> */}
          {/* <h6>Current Commision : {this.commision} %</h6> */}
          <form
            id="adminowner"
            onSubmit={(event) => {
              event.preventDefault();
              const address = this.owner_address.value;
              if (
                window.confirm(
                  "Owner's Address will be changed to " + address + ". Sure?"
                )
              ) {
                this.props.changeOwner(address);
              }
            }}
          >
            <div class="form-row container">
              <div className="form-group col-md-6">
                <h3 style={{ marginBottom: "2%", textAlign: "left" }}>
                  Change Foodiegenie Owner:{" "}
                </h3>
                <h6 style={{ marginBottom: "2%", textAlign: "left" }}>
                  Current Owner:{" "}
                  <a
                    href={
                      "https://etherscan.io/address/" + this.props.canteenOwner
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {this.props.canteenOwner.substring(0, 6)}...
                    {this.props.canteenOwner.substring(38, 42)}
                  </a>
                </h6>
                <InputGroup>
                  <input
                    id="commision"
                    style={{ marginBottom: "2%" }}
                    required
                    maxLength="42"
                    disabled={this.props.admin != this.props.account}
                    required
                    placeholder="Change Foodiegenie Owner (By Address)"
                    className="form-control"
                    ref={(input) => {
                      this.owner_address = input;
                    }}
                  />
                  <button
                    style={{ height: 38 }}
                    disabled={this.props.admin != this.props.account}
                    type="submit"
                    className="btn btn-warning"
                  >
                    <b>Change</b>
                  </button>
                </InputGroup>
              </div>
            </div>
          </form>
        </div>
        <div className="container-fluid mt-5 text-center">
          <form
            id="adminowner"
            onSubmit={(event) => {
              event.preventDefault();
              const fees = this.college_fees.value;
              if (window.confirm("College fees will be changed. Sure?")) {
                this.props.changeFees(fees);
              }
            }}
          >
            <div class="form-row container">
              <div className="form-group col-md-6">
                <h3 style={{ marginBottom: "2%", textAlign: "left" }}>
                  Change Foodiegenie Commission %:{" "}
                </h3>
                <h6 style={{ marginBottom: "2%", textAlign: "left" }}>
                  {"Current Commission: " + this.props.collegeFees + "%"}{" "}
                </h6>
                <InputGroup>
                  <input
                    id="commision"
                    style={{ marginBottom: "2%" }}
                    required
                    disabled={this.props.admin != this.props.account}
                    type="number"
                    max="99"
                    min="0"
                    placeholder="Change Commission (%)."
                    className="form-control"
                    ref={(input) => {
                      this.college_fees = input;
                    }}
                  />
                  <button
                    style={{ height: 38 }}
                    disabled={this.props.admin != this.props.account}
                    type="submit"
                    className="btn btn-warning"
                  >
                    <b>Change</b>
                  </button>
                </InputGroup>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Adminf;
