import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faUpload,
  faThumbsDown,
  faSearch,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "./library.css";
var input, filter, table, tr, td, i, txtValue;
function myFunction() {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

class StudentNotes extends Component {
  render() {
    return (
      // ============================================== Notes Upload Form ==============================================
      <div className="container-fluid mt-1 text-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const stream = this.stream.value;
            const subjectcode = this.subjectcode.value;
            const teacher = this.teacher.value;
            const date = this.date.value;
            this.props.uploadNote(stream, subjectcode, teacher, date);
          }}
        >
          <div class="sidenav1">
            <h5 className="form_components" style={{ textAlign: "center" }}>
              Add Notes To Network
            </h5>
            <div class="form-row">
              {/* ============================================== Stream */}
              <h6>Enter stream</h6>
              <div className="form-group form_components">
                {/* <input
                  id="stream"
                  type="text"
                  ref={(input) => {
                    this.stream = input;
                  }}
                  className="form-control"
                  placeholder="Stream"
                  required
                /> */}
                <select
                  id="inputState"
                  class="form-control"
                  ref={(select) => {
                    this.stream = select;
                  }}
                >
                  <option selected>CSE</option>
                  <option>ECE</option>
                  <option>EE</option>
                  <option>IT</option>
                  <option>AEIE</option>
                </select>
              </div>
              {/* ============================================== Subjet Code  */}
              <div className="form-group form_components">
                <h6>Enter subject-code</h6>
                {/* <input
                  id="subjectcode"
                  type="text"
                  ref={(input) => {
                    this.subjectcode = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="SubjectCode"
                  required
                /> */}
                <select
                  id="inputState"
                  class="form-control"
                  ref={(select) => {
                    this.subjectcode = select;
                  }}
                >
                  {/* <option selected>ESC-301</option>
                  <option>ESC-391</option>
                  <option>PCC-CS301</option>
                  <option>PCC-CS302</option>
                  <option>PCC-CS391</option>
                  <option>PCC-CS392</option>
                  <option>PCC-CS393</option>
                  <option>HSMC-301</option> */}
                  <option selected>ES-CS201</option>
                  <option>ES-CS291</option>
                  <option>ES-EE101</option>
                  <option>BS-EE191</option>
                  <option>ES-ME191</option>
                  <option>ES-ME192</option>
                  <option>ES-ME291</option>
                  <option>ES-ME292</option>

                  <option>BS-PH101</option>
                  <option>BS-PH191</option>
                  <option>BS-PH201</option>
                  <option>BS-PH291</option>
                  <option>BS-CH101</option>
                  <option>BS-CH191</option>
                  <option>BS-CH201</option>
                  <option>BS-CH291</option>

                  <option>BS-M101</option>
                  <option>BS-M102</option>
                  <option>BS-M201</option>
                  <option>BS-M202</option>

                  <option>HM-HU201</option>
                  <option>HM-HU291</option>
                </select>
              </div>
              {/* ============================================== Class Date  */}
              <div className="form-group form_components">
                <h6>Enter date</h6>
                <input
                  id="date"
                  type="date"
                  ref={(input) => {
                    this.date = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Date"
                  required
                />
              </div>

              {/* ============================================== Faculty Name  */}
              <div className="form-group form_components">
                <h6>Enter subject-code</h6>
                <input
                  id="teacher"
                  type="text"
                  ref={(input) => {
                    this.teacher = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Teacher"
                  required
                />
              </div>
              {/* ============================================== Choose File (PDF / DOC / PPT) */}
              <div className="form-group form_components">
                <input
                  type="file"
                  onChange={this.props.loadNote}
                  className="text-black text-monospace"
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                />
              </div>
              {/*  =========================================== Button : Upload Notes  */}
              <button type="submit" className="btn btn-success col-md-1.5">
                <b>Upload &nbsp;</b>
                <FontAwesomeIcon icon={faUpload} />
              </button>
            </div>
          </div>
        </form>

        {/* ========================================= Show all Notes (Mapping) ========================================= */}

        {/* =================================================== Card */}
        {/* <div class="card-group"> */}

        {/* =================================================== Table */}
        <div className="left">
          <button
            type="submit"
            onClick={myFunction}
            className="btn btn-success col-md-1.5"
            style={{ marginRight: "0.05%" }}
          >
            <b>Search</b>
          </button>
          <input
            type="text"
            id="myInput"
            placeholder="Search notes"
            title="Type in a name"
          />
        </div>
        <div class="cardnav1">
          {/* <div class="left">
              <button type="submit" className="btn btn-success col-md-1.5">
                <b>CSE</b>
                
              </button>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-success col-md-1.5">
                <b>IT </b>
                
              </button>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-success col-md-1.5">
                <b>ECE </b>
                
              </button>
              </div> */}

          <table
            id="myTable"
            class="table table-bordered"
            // style={{ width: "1000px", maxHeight: "450px" }}
          >
            <thead style={{ fontSize: "15px" }}>
              <tr className="bg-dark text-white">
                <th scope="col" style={{ width: "10px" }}>
                  No.
                </th>
                <th scope="col" style={{ width: "50px" }}>
                  Stream
                </th>
                <th scope="col" style={{ width: "50px" }}>
                  Subject Code
                </th>
                <th scope="col" style={{ width: "100px" }}>
                  Faculty Name
                </th>
                <th scope="col" style={{ width: "80px" }}>
                  Class Date
                </th>
                <th scope="col" style={{ width: "80px" }}>
                  Uploaded On
                </th>
                <th scope="col" style={{ width: "80px" }}>
                  Uploaded By
                </th>
                <th scope="col" style={{ width: "100px" }}>
                  Actions
                </th>
                <th scope="col" style={{ width: "50px" }}>
                  Reports
                </th>
                {/* <th scope="col" style={{ width: "80px" }}>
                Delete
              </th> */}
              </tr>
            </thead>

            {/* ========================================= Show all Notes (Mapping) ========================================= */}
            {this.props.notes.map((file, key) => {
              return (
                // =================================================== Table

                <thead style={{ fontSize: "12px" }} key={key}>
                  {
                    <tr>
                      <td>{file.note_Id}</td>
                      <td>{file.stream}</td>
                      <td>{file.subjectcode}</td>
                      <td>{file.teacher}</td>
                      <td>
                        {file.date.split("-")[2]}-{file.date.split("-")[1]}-
                        {file.date.split("-")[0]}
                      </td>
                      <td>
                        {moment.unix(file.uploadTime).format("D-MM-YYYY")}
                        <br />
                        {moment.unix(file.uploadTime).format("ddd h:mm:ss a")}
                        {/* {moment
                      .unix(file.uploadTime)
                      .format("D-MM-Y [<br>] hh:mm:ss A")} */}
                      </td>
                      <td>
                        <a
                          href={"https://etherscan.io/address/" + file.uploader}
                          rel="noopener noreferrer"
                          target="_blank"
                          class="text-muted text-decoration-none"
                        >
                          {file.uploader.substring(0, 6)}...
                          {file.uploader.substring(38, 42)}
                          &nbsp;&nbsp;
                          <FontAwesomeIcon icon={faSearch} />
                        </a>
                      </td>
                      {/* <td>
                    <Button
                      id="view"
                      href={"https://ipfs.infura.io/ipfs/" + file.note_Hash}
                      target="_blank"
                      onClick={() => onClickOpenVacancy(id)}
                    >
                      View
                    </Button> */}
                      {/* <Button
                      variant="success btn-sm"
                      href={"https://ipfs.infura.io/ipfs/" + file.note_Hash}
                      target="_blank"
                    >
                      Downlod
                    </Button> */}
                      {/* <a
                      href={"https://ipfs.infura.io/ipfs/" + file.note_Hash}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {file.note_Hash.substring(0, 10)}...
                    </a> 
                  </td>*/}
                      <td>
                        <Button
                          variant="success btn-sm mx-2"
                          href={"https://ipfs.infura.io/ipfs/" + file.note_Hash}
                          target="_blank"
                        >
                          {/* Download &nbsp; */}
                          <FontAwesomeIcon icon={faDownload} />
                        </Button>
                        <Button
                          id="delete"
                          variant="danger btn-sm"
                          disabled={
                            this.props.account != file.uploader &&
                            this.props.account != this.props.librarian
                          }
                          onClick={() => this.props.deletenote(key + 1)}
                        >
                          {/* Delete &nbsp; */}
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                      <td>
                        <Button
                          id="report"
                          variant="danger btn-sm"
                          disabled={this.props.account === file.uploader}
                          onClick={() => this.props.reportnote(key + 1)}
                        >
                          <FontAwesomeIcon icon={faThumbsDown} />{" "}
                          <Badge bg="secondary">{file.reports}</Badge>
                        </Button>
                      </td>
                    </tr>
                  }
                </thead>

                // =================================================== Card
                // <div class="cards">
                //   <Card
                //     border="success"
                //     style={{ height: "16.5rem", width: "12rem" }}
                //     key={key}
                //   >
                //     {/* ======================== Stream  */}
                //     <Card.Body>
                //       <Card.Title style={{ fontSize: "16.5px", color: "green" }}>
                //         Stream: {file.stream.substring(0, 46)}
                //       </Card.Title>

                //       {/* ======================== Subject Code  */}
                //       <Card.Subtitle
                //         className="mb-1 text-muted"
                //         style={{ fontSize: "12px" }}
                //       >
                //         Subject Code: {file.subjectcode}
                //       </Card.Subtitle>

                //       {/* ======================== Faculty Name */}
                //       <Card.Text style={{ fontSize: "12px" }}>
                //         Faculty: {file.teacher}
                //       </Card.Text>

                //       {/* ======================== Class Date  */}
                //       <Card.Subtitle
                //         className="mb-1 text-muted"
                //         style={{ fontSize: "12px" }}
                //       >
                //         Class Date: {file.date}
                //       </Card.Subtitle>

                //       {/* ======================== Upload Date (Moment : to convert Timestamp --> DD:MM:YYYY)  */}
                //       <Card.Text style={{ fontSize: "12px" }}>
                //         Upload Date:
                //         {moment.unix(file.uploadTime).format("h:mm:ss A M/D/Y")}
                //       </Card.Text>

                //       {/* ======================== Uploader  */}
                //       <Card.Link
                //         style={{ fontSize: "12px", color: "darkcyan" }}
                //         href={"https://etherscan.io/address/" + file.uploader}
                //         rel="noopener noreferrer"
                //         target="_blank"
                //       >
                //         By: {file.uploader.substring(0, 10)}...
                //       </Card.Link>
                //       <br></br>

                //       {/* ======================== Button : Download  */}
                //       <Card.Link
                //         style={{ fontSize: "12px", color: "purple" }}
                //         href={"https://ipfs.infura.io/ipfs/" + file.note_Hash}
                //         target="_blank"
                //         download="download"
                //       >
                //         Download
                //       </Card.Link>
                //       <br></br>

                //       {/* ======================== Button : Delete (Uploader Only)  */}
                //       <Button
                //         id="delete"
                //         variant="danger btn-sm"
                //         disabled={file.uploader != this.props.account}
                //         onClick={() => this.props.deletenote(key + 1)}
                //       >
                //         Delete
                //       </Button>
                //     </Card.Body>
                //   </Card>
                // </div>
              );
            })}
            {/* </div> */}
          </table>
        </div>
      </div>
    );
  }
}

export default StudentNotes;
