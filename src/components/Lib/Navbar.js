import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";
//import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a className="col-md-8" href="/">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/12406172-000b-4228-8773-7b97eb8fd888/da1coxr-815e3b9d-fa87-41aa-b084-e02975f4aa4e.gif"
              width="40"
              height="29"
              className="align-top"
              alt=""
            />
            <img
              src="https://see.fontimg.com/api/renderfont4/Gg5D/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/RENhbXB1cw/samarkan-normal.png"
              alt="Hindi fonts"
              width="100"
              height="30"
              className="align-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Library
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/lib-student">
                      Student
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/lib-librarian">
                      Librarian
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/lib-admin">
                      Admin
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PG Finder
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/studentpg">
                      Student
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/adminpg">
                      Renters
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Canteen
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/studentfood">
                      Student
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/adminfood">
                      Canteen
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/about-project">
                      About This Project
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/about-us">
                      Makers of this project
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* <a className="navbar-nav px-3"> */}
        {/* <small id="account">
            <a
              target="_blank"
              alt=""
              className="text-dark "
              rel="noopener noreferrer"
              href={"https://etherscan.io/address/" + this.props.account}
            >
              {this.props.account ? this.props.account.substring(0, 6) : "0x0"}
              ...
              {this.props.account
                ? this.props.account.substring(38, 42)
                : "0x0"}
            </a>
          </small> */}
        <a
          target="_blank"
          className="text-muted h6 small  text-decoration-none"
          rel="noopener noreferrer"
          href={"https://etherscan.io/address/" + this.props.account}
        >
          {this.props.account ? this.props.account.substring(0, 6) : "0x0"}
          ...
          {this.props.account ? this.props.account.substring(38, 42) : "0x0"}
        </a>
        &nbsp;
        <a>
          <FontAwesomeIcon icon={faUserCircle} size="2x" color="black" />
        </a>
        {/* <img
            src="https://classroomclipart.com/images/gallery/Animations/Education_School/black-student-wearing-mask-to-protect-against-virus-animation.gif"
            alt="alternatetext"
            width="30"
            height="30"
          ></img> */}
        {/* </a> */}
      </nav>
    );
  }
}

export default Navbar;
