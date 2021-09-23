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

        <h3>Agreement Termination Request</h3>

        <h6>
          Admin :{" "}
          <a
            href={"https://etherscan.io/address/" + this.props.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            {this.props.admin.substring(0, 6)}...
            {this.props.admin.substring(38, 42)}
          </a>
        </h6>
        <br></br>
        <table
          class="table table-bordered"
          // style={{ width: "1000px", maxHeight: "450px" }}
        >
          <thead style={{ fontSize: "15px" }}>
            <tr className="bg-dark text-white">
              <th scope="col" style={{ width: "50px" }}>
                Id
              </th>
              <th scope="col" style={{ width: "20px" }}>
                Room No
              </th>
              <th scope="col" style={{ width: "20px" }}>
                Agreement No
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Request date
              </th>
              <th scope="col" style={{ width: "100px" }}>
                landlord
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Tenant
              </th>
              <th scope="col" style={{ width: "80px" }}>
                Terminated
              </th>
              <th scope="col" style={{ width: "80px" }}>
                Rejected
              </th>
              <th scope="col" style={{ width: "8px" }}>
                Pending
              </th>
              <th scope="col" style={{ width: "150px" }}>
                Terminate (Admin Only)
              </th>
            </tr>
          </thead>

          {/* ========================================= Show all Notes (Mapping) ========================================= */}
          {this.props.RequestAgreementTermination_By_No.map((file, key) => {
            return (
              // =================================================== Table

              <thead style={{ fontSize: "12px" }} key={key}>
                {
                  <tr>
                    <td>{file.terminationno}</td>
                    <td>{file.roomid}</td>
                    <td>{file.agreementid}</td>
                    <td>
                      {moment
                        .unix(file.timestamp)
                        .format("D-MM-YYYY h:mm:ss A")}
                    </td>
                    <td>
                      {file.landlord.substring(0, 6)}...
                      {file.landlord.substring(38, 42)}
                    </td>
                    <td>
                      {file.tenant.substring(0, 6)}...
                      {file.tenant.substring(38, 42)}
                    </td>
                    <td>{file.terminated ? "Yes" : "No"}</td>
                    <td>{file.rejected ? "Yes" : "No"}</td>
                    <td>{file.completed ? "No" : "Yes"}</td>
                    <td>
                      <Button
                        id="Reject"
                        disabled={
                          file.completed == true ||
                          this.props.account != this.props.admin
                        }
                        variant="danger btn-sm"
                        onClick={() =>
                          this.props.reject(
                            file.roomid,
                            file.agreementid,
                            file.terminationno
                          )
                        }
                      >
                        Reject
                      </Button>
                      &nbsp;
                      <Button
                        id="Terminate"
                        disabled={
                          file.completed == true ||
                          this.props.account != this.props.admin
                        }
                        variant="danger btn-sm"
                        onClick={() =>
                          this.props.agreementTerminated(
                            file.roomid,
                            file.terminationno
                          )
                        }
                      >
                        Terminate
                      </Button>
                    </td>
                  </tr>
                }
              </thead>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Transactions;
