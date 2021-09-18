import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Student extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        {/* ========================================= Show all Books (Mapping) ========================================= */}

        <div class="card-group">
          {this.props.books.map((file, key) => {
            return (
              <div class="cards">
                <Card
                  border="success"
                  style={{ height: "26rem", width: "15rem" }}
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
                    style={{ height: "13.5rem" }}
                  />

                  {/* ======================== Book Name  */}
                  <Card.Body>
                    <Card.Title style={{ fontSize: "16px", color: "green" }}>
                      {file.book_Name.substring(0, 46)}
                    </Card.Title>

                    {/* ======================== Author  */}
                    <Card.Subtitle
                      className="mb-1 text-muted"
                      style={{ fontSize: "12px" }}
                    >
                      {file.author}
                    </Card.Subtitle>

                    {/* ======================== Description  */}
                    <Card.Text style={{ fontSize: "12px" }}>
                      {file.book_Description.substring(0, 50)}...
                    </Card.Text>

                    {/* ======================== ISBN No.  */}
                    <Card.Subtitle
                      className="mb-1 text-muted"
                      style={{ fontSize: "12px" }}
                    >
                      ISBN: {file.isbn}
                    </Card.Subtitle>

                    {/* ======================== Uploader Address  */}
                    <Card.Link
                      style={{ fontSize: "12px", color: "darkcyan" }}
                      href={"https://etherscan.io/address/" + file.uploader}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      By: {file.uploader.substring(0, 10)}...
                    </Card.Link>
                    <br></br>

                    {/* ======================== Goolge Books  */}
                    <Card.Link
                      style={{ fontSize: "12px", color: "orangered" }}
                      href={
                        "http://books.google.com/books?vid=ISBN" + file.isbn
                      }
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Google Books
                    </Card.Link>

                    {/* ======================== Download Link (IPFS Infura)  */}
                    <Card.Link
                      style={{ fontSize: "12px", color: "purple" }}
                      href={"https://ipfs.infura.io/ipfs/" + file.book_Hash}
                      target="_blank"
                      download="download"
                    >
                      Download
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Student;
