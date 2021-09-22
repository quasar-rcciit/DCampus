import React, { Component } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import moment from "moment";
// import Slider from "react-rangeslider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import "./pg.css";
import Web3 from "web3";
var input, filter, table, tr, td, i, txtValue;

//searches Agreements

class Transactions extends Component {
  render() {
    return (
      // ============================================== Notes Upload Form ==============================================
      <div className="container-fluid mt-5 text-center">
        {/* <h3>Change Commision Percentage</h3> */}
        {/* <div>{rvalue} %</div> */}
        {/* <h6>Current Commision : {this.commision} %</h6> */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const _commision = this.commision.value;
            this.props.changeCommision(_commision);
          }}
        >
          <div class="form-row container">
            <div className="form-group col-md-6">
            <h3 style={{marginBottom: "2%", textAlign:"left"}}>Change Commission %: </h3>
              <input
                id="commision"
                type="number"
                style={{marginBottom:"2%"}}
                max="50"
                min="0"
                ref={(input) => {
                  this.commision = input;
                }}
                className="form-control"
                placeholder="Change Commision (%)"
                required
              />
              <button
              style={{ height: 38 }}
              disabled={this.props.account != this.props.adminp}
              type="submit"
              className="btn btn-warning"
            >
              <b>Change</b>
            </button>
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Transactions;
