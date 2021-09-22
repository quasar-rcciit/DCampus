import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid">
        <a href="/" style={{ marginLeft: "4rem" }}>
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{ marginRight: "10rem" }}
          >
            <li style={{ marginLeft: "5%" }} className="nav-item">
              <a className="nav-link" aria-current="page" href="/lib-ebook">
                <strong>Library</strong>
              </a>
            </li>
            <i className="fas fa-book" style={{ marginTop: "0.6%" }}></i>
            <li className="nav-item dropdown" style={{ marginRight: "1%" }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/lib-notes">
                    Class Notes
                  </a>
                  <a className="dropdown-item" href="/lib-librarian">
                    Librarian
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/pgconnect">
                <strong>PGConnect</strong>
              </a>
            </li>
            <i className="fas fa-home" style={{ marginTop: "0.5%" }}></i>
            <li className="nav-item dropdown" style={{ marginRight: "1%" }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/transactions">
                    Transactions
                  </a>
                  <a className="dropdown-item" href="/landlords">
                    LandLords
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/foodiegenie">
                <strong>Foodiegenie</strong>
              </a>
            </li>
            <i className="fas fa-hamburger" style={{ marginTop: "0.5%" }}></i>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/foodiegenie-orders">
                    Previous Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/foodiegenie-owner">
                    Canteen Owner
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/foodiegenie-admin">
                    College Admin
                  </a>
                </li>
              </ul>
            </li>

            {/* ========================================  */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/admin">
                <strong>Admin</strong>
              </a>
            </li>
            <i className="fas fa-user-cog" style={{ marginTop: "0.5%" }}></i>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/admin-notifications">
                    Notifications
                  </a>
                </li>
              </ul>
            </li>

            {/* ================================= */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
