import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Web3 from "web3";
import moment from "moment";
// import { Modal } from "react-responsive-modal";
import "./pg.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faUpload,
  faThumbsDown,
  faSearch,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
class Studentpg extends Component {
  // state = {
  //   openModal: false,
  //   openModal1: false,
  // };

  // onClickButton = (e) => {
  //   e.preventDefault();
  //   this.setState({ openModal: true });
  // };

  // onCloseModal = () => {
  //   this.setState({ openModal: false });
  // };
  // onClickButton1 = (e) => {
  //   e.preventDefault();
  //   this.setState({ openModal1: true });
  // };

  // onCloseModal1 = () => {
  //   this.setState({ openModal1: false });
  // };
  render() {
    const closeIcon = <FontAwesomeIcon icon={faWindowClose} color="red" />;
    return (
      <>
        <h1
          style={{ textAlign: "center", marginBottom: "2%", marginTop: "2%" }}
        >
          Welcome Students
        </h1>
        <div class="card-group">
          {this.props.Room_by_No.map((file, key) => {
            return (
              <div class="cardspg">
                <Card
                  border="shadow"
                  className="card text-white mb-2 "
                  style={{
                    height: "auto",
                    width: "20rem",
                    backgroundColor: "#e6f9d4",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
                  }}
                  key={key}
                >
                  {/* ======================== Book Image (From Google Books)  */}
                  {/* ======================== Book Name  */}
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontSize: "18px",
                        color: "Green",
                        fontFamily: "monospace",
                      }}
                    >
                      <b>{file.housename}</b>
                    </Card.Title>
                    {/* ======================== Author  */}
                    <Card.Title
                      className="mb-1 text-dark"
                      style={{
                        fontSize: "14px",

                        fontFamily: "monospace",
                      }}
                    >
                      <b>Room No:</b> {file.roomid}
                    </Card.Title>
                    {/* <Card.Title style={{ fontSize: "16px", color: "grey", fontFamily:"monospace" }}>
                      Agreement No: {file.agreementid}
                    </Card.Title> */}
                    <Card.Title
                      className="mb-1 text-dark"
                      style={{ fontSize: "14px", fontFamily: "monospace" }}
                    >
                      <b>Address: </b>
                      {file.houseaddress}
                    </Card.Title>
                    {/* ======================== Description  */}
                    {/* ======================== ISBN No.  */}
                    <Card.Title
                      className="mb-1 text-dark"
                      style={{ fontSize: "13px", fontFamily: "monospace" }}
                    >
                      <b>Rent / Month :</b>
                      {"  "}
                      {Web3.utils.fromWei(
                        file.rent_per_month.toString(),
                        "ether"
                      )}{" "}
                      ETH
                    </Card.Title>
                    <Card.Title
                      className="mb-1 text-dark"
                      style={{ fontSize: "13px", fontFamily: "monospace" }}
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
                      className="mb-1 text-dark"
                      style={{ fontSize: "13px", fontFamily: "monospace" }}
                    >
                      <b>New Contract on:</b>
                      {"  "}
                      {file.timestamp != 0
                        ? moment.unix(file.timestamp).format("D-MM-YYYY ")
                        : " "}
                    </Card.Title>
                    {/* ======================== Google Books Link  */}
                    <Card.Title
                      className="mb-1 text-dark"
                      style={{ fontSize: "13px", fontFamily: "monospace" }}
                    >
                      <b>Landlord:</b>{" "}
                      <Card.Link
                        href={"https://etherscan.io/address/" + file.landlord}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {file.landlord.substring(0, 6)}...
                        {file.landlord.substring(38, 42)}
                      </Card.Link>
                    </Card.Title>
                    {/* ======================== Button : Delete  */}
                    <Card.Title
                      className="mb-1 text-dark"
                      style={{ fontSize: "13px", fontFamily: "monospace" }}
                    >
                      <b>{file.vacant ? "Previous " : "Current "} Tenant: </b>
                      <Card.Link
                        href={
                          "https://etherscan.io/address/" + file.currentTenant
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
                      className="mb-1 text-dark"
                      style={{ fontSize: "13px", fontFamily: "monospace" }}
                    >
                      <b>Vacancy:</b> {file.vacant ? "YES" : "NO"}
                    </Card.Title>
                    <Button
                      id="Signagreement"
                      style={{
                        borderRadius: "10px",
                        marginTop: "3%",
                        marginRight: "1%",
                      }}
                      disabled={
                        file.disableroom == true ||
                        file.vacant == false ||
                        file.landlord == this.props.account
                      }
                      variant="success btn-sm"
                      // onClick={this.onClickButton}
                      onClick={() => this.props.signAgreement(key + 1)}
                    >
                      Sign Agreement
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
                      {/* <h3>
                            Please Enter the reason why you want to Terminate the Agreement.
                          </h3>
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
                        <h3>Terms of the agreement</h3>{" "}
                        <h6>
                          why you want to terminate the Agreement<br></br>
                          This will help Admin to Verify the
                          processkahsdkahsdkjahksjdhakhsdhauiwehiuhdakshdikaiqhdbaibfiuaghsdiuagsriuqhbioghdaiushdkahsdfklahsdkjahskdjhaksdhakjshdkjahsdkjahskdjhakhsdkjahsdkjl
                          <br></br>You also can add Image/Video URL
                        </h6>
                        {/* <button
                          type="submit"
                          style={{ borderRadius: "10px" }}
                          // disabled={
                          //   file.disableroom == true ||
                          //   file.vacant == false ||
                          //   file.landlord == this.props.account
                          // }
                          className="btn btn-success col-md-1.5"
                          onClick={() => this.props.signAgreement(key + 1)}
                        >
                          <b>Send</b>
                        </button>
                      </form>
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
                          </Button> 
                    </Modal>
                          &nbsp;*/}
                    <Button
                      id="Payrent"
                      style={{ borderRadius: "10px", marginTop: "3%" }}
                      disabled={
                        file.disableroom == true ||
                        file.vacant == true ||
                        file.currentTenant != this.props.account
                      }
                      variant="success btn-sm"
                      //onClick={this.onClickButton1}
                      onClick={() => this.props.payRent(key + 1)}
                    >
                      Pay Rent
                    </Button>
                    {/*<Modal 
                      animationDuration={100}
                      styles={{
                        modal: {},
                        overlay: { background: "#ccc" },
                      }}
                      closeIconSize={500}
                      center
                      open={this.state.openModal1}
                      onClose={this.onCloseModal1}
                      closeIcon={closeIcon}
                    >
                      {/* <h3>
                            Please Enter the reason why you want to Terminate the Agreement.
                          </h3> 
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
                        <h3>Terms of the agreement</h3>{" "}
                        <h6>
                          why you want to terminate the Agreement<br></br>
                          This will help Admin to Verify the
                          processkahsdkahsdkjahksjdhakhsdhauiwehiuhdakshdikaiqhdbaibfiuaghsdiuagsriuqhbioghdaiushdkahsdfklahsdkjahskdjhaksdhakjshdkjahsdkjahskdjhakhsdkjahsdkjl
                          <br></br>You also can add Image/Video URL
                        </h6>
                        <button
                          type="submit"
                          style={{ borderRadius: "10px" }}
                          disabled={
                            file.disableroom == true ||
                            file.vacant == true ||
                            file.currentTenant != this.props.account
                          }
                          className="btn btn-success col-md-1.5"
                          onClick={() => this.props.payRent(key + 1)}
                        >
                          <b>Send</b>
                        </button>
                      </form>
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
                          </Button>
                    </Modal> */}
                    &nbsp;
                    <Button
                      id="report"
                      style={{ borderRadius: "10px", marginTop: "3%" }}
                      variant="danger btn-sm"
                      disabled={
                        file.disableroom == true ||
                        this.props.account != file.currentTenant
                      }
                      onClick={() => this.props.reportroom(key + 1)}
                    >
                      <FontAwesomeIcon icon={faThumbsDown} />{" "}
                      <Badge bg="secondary">{file.reports}</Badge>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          {/* </div> */}
          {/* <div class="card-group">
          {this.props.RoomAgreement_by_No.map((file, key) => {
            return (
              <div class="cards">
                <Card
                  border="success"
                  style={{ height: "12rem", width: "12rem" }}
                  key={key}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      SD: {file.securityDeposit}
                      ETH
                    </Card.Title>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Rent: {file.rent_per_month}
                      ETH
                    </Card.Title>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Timestamp:
                      {moment
                        .unix(file.timestamp)
                        .format("D-MM-YYYY h:mm:ss A")}
                    </Card.Title>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Landlord: {file.landlordAddress}
                    </Card.Title>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Tenant: {file.tenantAddress}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>

        <div class="card-group">
          {this.props.Rent_by_No.map((file, key) => {
            return (
              <div class="cards">
                <Card
                  border="success"
                  style={{ height: "12rem", width: "12rem" }}
                  key={key}
                >
                  <Card.Body>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Rent: {file.rent_per_month}
                      ETH
                    </Card.Title>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Timestamp:
                      {moment
                        .unix(file.timestamp)
                        .format("D-MM-YYYY h:mm:ss A")}
                    </Card.Title>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Landlord: {file.landlordAddress}
                    </Card.Title>
                    <Card.Title style={{ fontSize: "10px", color: "green" }}>
                      Tenant: {file.tenantAddress}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div> */}
          {/* //{" "} */}
        </div>
      </>
    );
  }
}

export default Studentpg;

// <div class="card-group">
//           {this.props.books.map((file, key) => {
//             return (
//               <div class="cards">
//                 <Card
//                   border="success"
//                   style={{ height: "26rem", width: "15rem" }}
//                   key={key}
//                 >
//                   {/* ======================== Book Image (From Google Books)  */}
//                   <Card.Img
//                     variant="top"
//                     src={
//                       "https://books.google.com/books/content?vid=isbn" +
//                       file.isbn +
//                       "&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
//                     }
//                     style={{ height: "13.2rem" }}
//                   />

//                   {/* ======================== Book Name  */}
//                   <Card.Body>
//                     <Card.Title style={{ fontSize: "16px", color: "green" }}>
//                       {file.book_Name.substring(0, 46)}
//                     </Card.Title>

//                     {/* ======================== Author  */}
//                     <Card.Subtitle
//                       className="mb-1 text-muted"
//                       style={{ fontSize: "12px" }}
//                     >
//                       {file.author}
//                     </Card.Subtitle>

//                     {/* ======================== Description  */}
//                     <Card.Text style={{ fontSize: "12px" }}>
//                       {file.book_Description.substring(0, 50)}...
//                     </Card.Text>

//                     {/* ======================== ISBN No.  */}
//                     <Card.Subtitle
//                       className="mb-1 text-muted"
//                       style={{ fontSize: "12px" }}
//                     >
//                       ISBN: {file.isbn}
//                     </Card.Subtitle>

//                     {/* ======================== Google Books Link  */}
//                     <Card.Link
//                       style={{ fontSize: "12px", color: "orangered" }}
//                       href={
//                         "http://books.google.com/books?vid=ISBN" + file.isbn
//                       }
//                       rel="noopener noreferrer"
//                       target="_blank"
//                     >
//                       Google Books
//                     </Card.Link>

//                     {/* ======================== Download Link (IPFS Infura)  */}
//                     <Card.Link
//                       style={{ fontSize: "12px", color: "purple" }}
//                       href={"https://ipfs.infura.io/ipfs/" + file.book_Hash}
//                       target="_blank"
//                       download="download"
//                     >
//                       Download
//                     </Card.Link>
//                     <br></br>

//                     {/* ======================== Button : Delete  */}
//                     <Button
//                       id="delete"
//                       variant="danger btn-sm"
//                       onClick={() => this.props.deletebook(key + 1)}
//                     >
//                       Delete
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             );
//           })}
//         </div>

// <form
// onSubmit={(event) => {
//   event.preventDefault();
//   const _index = this.index.value;
//   this.props.payRent(_index);
// }}
// >
// <div class="form-row">
//   {/* ============================================== Book Name  */}
//   <div className="form-group col-md-4">
//     <br></br>
//     <input
//       id="index"
//       type="number"
//       ref={(input) => {
//         this.index = input;
//       }}
//       className="form-control"
//       placeholder="index"
//       required
//     />
//   </div>

//   {/* ============================================== Description  */}
//   <div class="form-row">
//     {/* ============================================== Choose File (pdf)  */}
//     <div className="form-group col-md-4">
//       {/*  =========================================== Button : Upload Book  */}

//       <button type="submit" className="btn btn-success col-md-1.5">
//         <b>Pay Rent</b>
//       </button>
//     </div>
//   </div>
// </div>
// </form>
// <form
// onSubmit={(event) => {
//   event.preventDefault();
//   const _index = this.index.value;
//   this.props.agreementCompleted(_index);
// }}
// >
// <div class="form-row">
//   {/* ============================================== Book Name  */}
//   <div className="form-group col-md-4">
//     <br></br>
//     <input
//       id="index"
//       type="number"
//       ref={(input) => {
//         this.index = input;
//       }}
//       className="form-control"
//       placeholder="index"
//       required
//     />
//   </div>

//   {/* ============================================== Description  */}
//   <div class="form-row">
//     {/* ============================================== Choose File (pdf)  */}
//     <div className="form-group col-md-4">
//       {/*  =========================================== Button : Upload Book  */}

//       <button type="submit" className="btn btn-success col-md-1.5">
//         <b>Agreement Completed</b>
//       </button>
//     </div>
//   </div>
// </div>
// </form>

// <form
// onSubmit={(event) => {
//   event.preventDefault();
//   const _index = this.index.value;
//   this.props.agreementTerminated(_index);
// }}
// >
// <div class="form-row">
//   {/* ============================================== Book Name  */}
//   <div className="form-group col-md-4">
//     <br></br>
//     <input
//       id="index"
//       type="number"
//       ref={(input) => {
//         this.index = input;
//       }}
//       className="form-control"
//       placeholder="index"
//       required
//     />
//   </div>

//   {/* ============================================== Description  */}
//   <div class="form-row">
//     {/* ============================================== Choose File (pdf)  */}
//     <div className="form-group col-md-4">
//       {/*  =========================================== Button : Upload Book  */}

//       <button type="submit" className="btn btn-success col-md-1.5">
//         <b>Agreement Terminated</b>
//       </button>
//     </div>
//   </div>
// </div>
// </form>
