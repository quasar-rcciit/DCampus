import React, { Component } from "react";
import { InputGroup } from "react-bootstrap";
// import { convertBytes } from "./helpers";
// import moment from "moment";

import Card from "react-bootstrap/Card";

class Admin extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        {/* <div className="text-left font-weight-bold"> Admin Space : </div>
        <br></br> */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const _librarian = this.librarian.value;
            this.props.changelibrarian(_librarian);
          }}
        >
          <div class="form-row container">
            <div className="form-group col-md-6">
              <h3 style={{ marginBottom: "2%", textAlign: "left" }}>
                Change Librarian:{" "}
              </h3>
              <h6 style={{ marginBottom: "2%", textAlign: "left" }}>
                Current Librarian:&nbsp;
                <a
                  href={"https://etherscan.io/address/" + this.props.librarian}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {this.props.librarian.substring(0, 6)}...
                  {this.props.librarian.substring(38, 42)}
                </a>
              </h6>
              <InputGroup>
                <input
                  id="librarian"
                  style={{ marginBottom: "2%" }}
                  disabled={this.props.account != this.props.admin}
                  type="text"
                  ref={(input) => {
                    this.librarian = input;
                  }}
                  className="form-control"
                  placeholder="Change Librarian (By: Address)"
                  required
                />
                <button
                  style={{ height: 38, textAlign: "left" }}
                  disabled={this.props.account != this.props.admin}
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
    );
  }
}

export default Admin;
