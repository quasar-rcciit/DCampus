import React, { Component } from "react";
import { Badge, Button, Form } from "react-bootstrap";
import "./pg.css";
import Card from "react-bootstrap/Card";
import Web3 from "web3";
import moment from "moment";
// import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faWindowClose,
  faUpload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

class Landlord extends Component {
  // state = {
  //   openModal: false,
  // };

  // onClickButton = (e) => {
  //   e.preventDefault();
  //   this.setState({ openModal: true });
  // };

  // onCloseModal = () => {
  //   this.setState({ openModal: false });
  // };

  render() {
    const closeIcon = <FontAwesomeIcon icon={faWindowClose} color="red" />;
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const _housename = this.housename.value;

            const _houseaddress = this.houseaddress.value;
            const _rentcost = this.rentcost.value;
            const _securitydeposit = this.securitydeposit.value;
            if (_houseaddress.length > 80 || _housename.length > 30) {
              window.alert(
                "Please enter Name within 30 characters\nor, Enter Address within 80 characters"
              );
            } else {
              this.props.addRoom(
                _housename,
                _houseaddress,
                _rentcost,
                _securitydeposit
              );
            }
          }}
        >
          <div style={{ marginBottom: "2.5%", marginTop: "2.5%" }}>
            <h1>
              <b>Welcome Landlord</b>
            </h1>
            <h4>Use this module to add PG/Hostel to the network</h4>
          </div>
          <div class="sidenavl">
            <div class="form-row" style={{ padding: "5%" }}>
              <div className="form-group form_components">
                <h5 className="form_components" style={{ textAlign: "center" }}>
                  Add New PG / Hostel
                </h5>
                <h6 style={{ textAlign: "left" }}>Room Name</h6>
                <input
                  id="housename"
                  type="text"
                  ref={(input) => {
                    this.housename = input;
                  }}
                  className="form-control"
                  placeholder="Enter : Room Name"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6 style={{ textAlign: "left" }}>Room Address</h6>
                <input
                  id="houseaddress"
                  type="text"
                  ref={(input) => {
                    this.houseaddress = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Enter : Room Address"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6 style={{ textAlign: "left" }}>Rent/Month (ETH)</h6>
                <input
                  id="rentcost"
                  type="number"
                  step="any"
                  ref={(input) => {
                    this.rentcost = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Enter : Rent / Month (in ETH)"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6 style={{ textAlign: "left" }}>
                  One Time Security Deposit(ETH)
                </h6>
                <input
                  id="securitydeposit"
                  type="number"
                  step="any"
                  ref={(input) => {
                    this.securitydeposit = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Enter: Onetime Security Deposit (ETH)"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!this.props.account}
                className="btn btn-success col-md-1.5"
              >
                <b>
                  <FontAwesomeIcon icon={faPlus} />
                  &nbsp;&nbsp; Add Room
                </b>
              </button>
            </div>
          </div>
        </form>
        <div class="cardnavl">
          <div class="card-group">
            {this.props.Room_by_No.map((file, key) => {
              // console.log(this.props.RoomAgreement_by_No[key].timestamp);
              return (
                <div class="cardspg">
                  <Card
                    border="shadow"
                    style={{
                      height: "24.5rem",
                      width: "19.5rem",
                      backgroundColor: "#e6f9d4",
                      textAlign: "left",
                    }}
                    key={key}
                  >
                    {/* ======================== Book Image (From Google Books)  */}
                    {/* ======================== Book Name  */}
                    <Card.Body>
                      {/* <div class="dropdownpg-container" tabindex="-1">
                      <div class="three-dots"></div>
                      <div class="dropdownpg">                      
                      <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" disabled={this.props.account != this.props.admin} checked={!file.disableroom}
                        variant={
                          file.disableroom ? "checked" : "unchecked"
                        }
                        onClick={() => this.props.diableRoom(file.roomid)}
                        />
                    </div>
                      </div>
                    </div> */}
                      <Card.Img
                        src={
                          file.disableroom
                            ? "https://freepngimg.com/thumb/blocked/6-2-blocked-png-clipart-thumb.png"
                            : file.vacant
                            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/1024px-Transparent_square.svg.png"
                            : "https://images.squarespace-cdn.com/content/v1/52b7145ae4b0af23bf047e39/1598180087757-F9NHODH3UTG62HSYEWBR/ptaa-pilgrimage-booked-out-300x176.png?format=2500w"
                        }
                        alt="Card image"
                      />
                      <Card.ImgOverlay>
                        <div
                          class="form-check form-switch"
                          style={{ marginLeft: "90%" }}
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            disabled={this.props.account != this.props.admin}
                            checked={!file.disableroom}
                            variant={file.disableroom ? "checked" : "unchecked"}
                            onClick={() => this.props.diableRoom(file.roomid)}
                          />
                        </div>
                        <Card.Title
                          style={{
                            fontSize: "16px",
                            color: "green",
                            fontFamily: "monospace",
                          }}
                        >
                          <b>{file.housename}</b>
                        </Card.Title>

                        {/* ======================== Author  */}
                        <Card.Title
                          style={{
                            fontSize: "14px",
                            fontFamily: "monospace",
                          }}
                        >
                          <b>Room No:</b> {file.roomid}
                        </Card.Title>
                        <Card.Title
                          style={{
                            fontSize: "14px",
                            fontFamily: "monospace",
                          }}
                        >
                          <b>Current Agreement:</b> {file.agreementid}
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Address:</b> {file.houseaddress.substring(0, 50)}
                          ...
                        </Card.Title>
                        {/* ======================== ISBN No.  */}
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Rent / Month:</b>
                          {"  "}
                          {Web3.utils.fromWei(
                            file.rent_per_month.toString(),
                            "ether"
                          )}{" "}
                          ETH
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Security Deposit :</b>
                          {"  "}
                          {Web3.utils.fromWei(
                            file.securityDeposit.toString(),
                            "ether"
                          )}{" "}
                          ETH
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>New Contract on:</b>
                          {"  "}
                          {file.timestamp != 0
                            ? moment.unix(file.timestamp).format("D-MM-YYYY ")
                            : " "}
                        </Card.Title>
                        {/* ======================== Google Books Link  */}
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Landlord:</b>{" "}
                          <Card.Link
                            href={
                              "https://etherscan.io/address/" + file.landlord
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.landlord.substring(0, 6)}...
                            {file.landlord.substring(38, 42)}
                          </Card.Link>
                        </Card.Title>
                        {/* ======================== Button : Delete  */}
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>
                            {file.vacant ? "Previous " : "Current "} Tenant:{" "}
                          </b>
                          <Card.Link
                            href={
                              "https://etherscan.io/address/" +
                              file.currentTenant
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {file.currentTenant !=
                            "0x0000000000000000000000000000000000000000"
                              ? file.currentTenant.substring(0, 6)
                              : "0x0"}
                            ...
                            {file.currentTenant !=
                            "0x0000000000000000000000000000000000000000"
                              ? file.currentTenant.substring(38, 42)
                              : "0x0"}
                          </Card.Link>
                        </Card.Title>
                        <Card.Title
                          // className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Vacancy:</b> {file.vacant ? "YES" : "NO"}
                        </Card.Title>
                        <Card.Title
                          className="mb-1 text"
                          style={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          <b>Reports:</b>&nbsp;{" "}
                          <FontAwesomeIcon icon={faThumbsDown} />
                          <a
                            id="report"
                            style={{
                              margin: "1%",
                              borderRadius: "8px",
                              fontFamily: "monospace",
                            }}
                            disabled
                          >
                            {" "}
                            <a>{file.reports}</a>
                          </a>
                        </Card.Title>
                        <div>
                          <Button
                            id="Completed"
                            style={{
                              margin: "1%",
                              borderRadius: "8px",
                              marginTop: "5%",
                            }}
                            disabled={
                              file.disableroom == true ||
                              file.landlord != this.props.account ||
                              file.vacant == true
                            }
                            variant="success btn-sm"
                            onClick={() =>
                              this.props.agreementCompleted(key + 1)
                            }
                          >
                            Completed
                          </Button>

                          {/* <Button
                        id="Terminate"
                        disabled={
                          file.disableroom == true ||
                          file.landlord != this.props.account
                        }
                        variant="danger btn-sm"
                        onClick={() =>
                          this.props.requestTermination(
                            file.roomid,
                            file.agreementid
                          )
                        }
                      >
                       Req. Termination
                      </Button> */}

                          <Button
                            style={{
                              margin: "1%",
                              borderRadius: "8px",
                              marginTop: "5%",
                            }}
                            disabled={
                              file.disableroom == true ||
                              file.landlord != this.props.account ||
                              file.vacant == true
                            }
                            variant="danger btn-sm"
                            onClick={() =>
                              this.props.requestTermination(
                                file.roomid,
                                file.agreementid
                              )
                            }
                          >
                            Req. Termination
                          </Button>
                          {/* <Modal
                          animationDuration={100}
                          styles={{
                            modal: {},
                            overlay: { background: "#ccc" },
                          }}
                          closeIconSize={500}
                          center
                          open={this.state.openModal}
                          onClose={this.onCloseModal}
                          closeIcon={closeIcon}
                        >
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();
                              const _reason = this.reason.value;
                              this.props.requestTermination(
                                file.roomid,
                                file.agreementid,
                                _reason
                              );
                            }}
                          >
                            <h3>Please mention the reason,</h3>{" "}
                            <h6>
                              why you want to terminate the Agreement<br></br>
                              This will help Admin to Verify the process
                              <br></br>You also can add Image/Video URL
                            </h6>
                            <input
                              id="houseaddress"
                              type="text"
                              ref={(input) => {
                                this.reason = input;
                              }}
                              className="form-control text-monospace"
                              placeholder="Enter : Reason of Termination Req."
                              required
                            />
                            <button
                              style={{ margin: "1%", borderRadius: "8px" }}
                              type="submit"
                              disabled={
                                file.disableroom == true ||
                                file.landlord != this.props.account
                              }
                              className="btn btn-success col-md-1.5"
                            >
                              <b>Send</b>
                            </button>
                          </form> */}
                          {/* <Button
                            id="Terminate"
                            // disabled={
                            //   file.disableroom == true ||
                            //   file.landlord != this.props.account
                            // }
                            variant="danger btn-sm"
                            onClick={() =>
                              this.props.requestTermination(
                                file.roomid,
                                file.agreementid
                              )
                            }
                          >
                            Req. Termination
                          </Button> */}
                          {/* </Modal>                   */}
                        </div>
                      </Card.ImgOverlay>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Landlord;
