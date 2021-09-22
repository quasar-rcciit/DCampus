import React, { Component } from "react";
//import Card from "react-bootstrap/Card";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./library.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

class Student extends Component {
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
          Welcome to Library
        </h2>
        <div className="container-fluid mt-5 text-center">
          {/* ========================================= Show all Books (Mapping) ========================================= */}

          <div class="card-group">
            {this.props.books.map((file, key) => {
              return (
                //     <Col lg={3} md={6} className="pt-4 mb-3">
                //     <Card className="card_sp w-100" >
                //     <Card.Img variant="top" src="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217" className="card_sp_image" />
                //     <Card.Body>
                //     <Card.Title>Very Nice</Card.Title>
                //     <Card.Text>
                //         Zigzagging between the rarefied circles of Manhattan investment banking, the achingly self-serious MFA programs of the Midwest, and the private bedrooms of Connecticut, Very Nice is an audacious, addictive, and wickedly smart take on the way we live now.
                //     </Card.Text>
                //     <div className="d-flex justify-content-center my-2">
                //       <Button variant="warning" className="mx-2">Button 1</Button>
                //       <Button variant="danger" className="mx-2">Button 2</Button>
                //       <Button variant="light" className="mx-2">Button 3 </Button>
                //     </div>
                //   </Card.Body>
                // </Card>
                // </Col>

                <Row>
                  <Col style={{ marginRight: "10px", marginLeft: "10px" }}>
                    <Card
                      className="card_sp w-95"
                      // border="shadow"
                      style={{
                        width: "16rem",
                        height: "23.2rem",
                        textAlign: "center",
                        marginBottom: "2%",
                        borderRadius: "16px",
                        boxShadow:"0 4px 8px 0 #f2f1f1, 0 6px 5px 0 rgba(0, 0, 0, 0.19)"
                      }}
                      key={key}
                    >
                      {/* ======================== Book Image (From Google Books)  */}
                      <Card.Img
                        variant="top"
                        src={
                          "https://books.google.com/books/content?vid=isbn" +
                          file.isbn +
                          "&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
                        }
                        className="card_sp_image"
                        style={{ height: "13.6rem" }}
                      />

                      {/* ======================== Book Name  */}
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "17px",
                            color: "black",
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                          }}
                        >
                          <b>{file.book_Name.substring(0, 46)}</b>
                        </Card.Title>

                        {/* ======================== Author  */}
                        <Card.Subtitle
                          className="mb-1 text-muted"
                          style={{ fontSize: "14px" }}
                        >
                          {file.author}
                        </Card.Subtitle>

                        {/* ======================== Description  */}
                        <Card.Text style={{ fontSize: "12px", height: "50px" }}>
                          {file.book_Description.substring(0, 80)}...
                        </Card.Text>

                        {/* ======================== ISBN No.  */}
                        <Card.Subtitle
                          className="mb-1 text-muted"
                          style={{ fontSize: "11px" }}
                        >
                          ISBN: {file.isbn}
                        </Card.Subtitle>

                        {/* ======================== Uploader Address  */}
                        <Card.Link
                          style={{ fontSize: "11px", color: "darkcyan" }}
                          href={"https://etherscan.io/address/" + file.uploader}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          By: {file.uploader.substring(0, 10)}...
                        </Card.Link>
                        <br></br>

                        {/* ======================== Goolge Books  */}
                        <Card.Link
                          className="btn btn-outline-dark"
                          style={{
                            fontSize: "0.8rem",
                            borderRadius: "10px",
                            margin: "2%",
                          }}
                          href={
                            "http://books.google.com/books?vid=ISBN" + file.isbn
                          }
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            style={{ height: "18px", width: "18px" }}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"
                          />
                          &nbsp;Books
                        </Card.Link>

                        {/* ======================== Download Link (IPFS Infura)  */}
                        <Card.Link
                          class="btn btn-success"
                          style={{
                            fontSize: "0.8rem",
                            borderRadius: "10px",
                            margin: "2%",
                          }}
                          href={"https://ipfs.infura.io/ipfs/" + file.book_Hash}
                          target="_blank"
                          download="download"
                        >
                          Download &nbsp; <FontAwesomeIcon icon={faDownload} />
                        </Card.Link>
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

export default Student;
