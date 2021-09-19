import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./library.css";
import Card from "react-bootstrap/Card";
import Web3 from "web3";
import moment from "moment";

class Librarian extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.book_Name.value;
            const description = this.book_Description.value;
            const author = this.author.value;
            const isbn = this.isbn.value;
            this.props.uploadBook(name, description, author, isbn);
          }}
        >
          <h1>
            <b>Welcome Librarian</b>
          </h1>
          <h4>Use this module to add books to the network</h4>
          <div class="sidenav">
            <div class="form-row">
              <div className="form-group form_components">
                <h5 className="form_components" style={{ textAlign: "center" }}>
                  Add Books To Network
                </h5>
                <h6>Enter Book Name</h6>
                <input
                  id="book_Name"
                  type="text"
                  ref={(input) => {
                    this.book_Name = input;
                  }}
                  className="form-control"
                  placeholder="Book Name"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6>Enter Author Name</h6>
                <input
                  id="author"
                  type="text"
                  ref={(input) => {
                    this.author = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Author"
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6>Enter ISBN Number</h6>
                <input
                  id="isbn"
                  type="number"
                  ref={(input) => {
                    this.isbn = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="ISBN No."
                  required
                />
              </div>
              <div className="form-group form_components">
                <h6>Enter Description</h6>
                <textarea
                  id="book_Description"
                  type="text"
                  ref={(input) => {
                    this.book_Description = input;
                  }}
                  className="form-control text-monospace"
                  placeholder="Description"
                  required
                />
              </div>
              <div className="form-group form_components">
                <input
                  type="file"
                  onChange={this.props.loadBook}
                  className="text-black text-monospace"
                  accept="application/pdf"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={this.props.account != this.props.librarian}
                className="btn btn-success col-md-1.5"
              >
                <b>Upload</b>
              </button>
            </div>
          </div>
        </form>
        <div class="cardnav">
          <div class="card-group">
            {this.props.books.map((file, key) => {
              return (
                <div class="cards">
                  <Card
                    border="success"
                    style={{ height: "22rem", width: "11rem" }}
                    key={key}
                  >
                    <Card.Img
                      variant="top"
                      src={
                        "https://books.google.com/books/content?vid=isbn" +
                        file.isbn +
                        "&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
                      }
                      style={{ height: "9rem" }}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "11px", color: "green" }}>
                        {file.book_Name.substring(0, 46)}
                      </Card.Title>
                      <Card.Subtitle
                        className="mb-1 text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        {file.author}
                      </Card.Subtitle>
                      <Card.Text style={{ fontSize: "10px" }}>
                        {file.book_Description.substring(0, 50)}...
                      </Card.Text>
                      <Card.Subtitle
                        className="mb-1 text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        ISBN: {file.isbn}
                      </Card.Subtitle>
                      {/* <Card.Link
                      style={{ fontSize: "12px", color: "darkcyan" }}
                      href={"https://etherscan.io/address/" + file.uploader}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      By: {file.uploader.substring(0, 10)}...
                    </Card.Link>
                    <br></br> */}
                      <Card.Link
                        style={{ fontSize: "10px", color: "orangered" }}
                        href={
                          "http://books.google.com/books?vid=ISBN" + file.isbn
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Google Books
                      </Card.Link>
                      <Card.Link
                        style={{ fontSize: "10px", color: "purple" }}
                        href={"https://ipfs.infura.io/ipfs/" + file.book_Hash}
                        target="_blank"
                        download="download"
                      >
                        Download
                      </Card.Link>
                      {/* <br></br> */}

                      <Button
                        id="delete"
                        disabled={this.props.account != this.props.librarian}
                        variant="danger btn-sm"
                        onClick={() => this.props.deletebook(key + 1)}
                      >
                        Delete
                      </Button>
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

export default Librarian;
