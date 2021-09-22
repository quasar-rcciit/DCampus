import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import background from "./assets/12175.jpg";
// ================================================== Home & Navbar
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// ================================================== Food
import Food from "./components/Food/Food";
// ================================================== PG
import Pg from "./components/Pg/Pg";
import Adminpg from "./components/Pg/Adminpg";
import Studentpg from "./components/Pg/Studentpg";
import Landlord from "./components/Pg/Landlord";
// =================================================== Library
import Lib from "./components/Lib/Lib";
import Applib from "./components/Lib/Applib";
import AppFood from "./components/Food/AppFood";
import Web3 from "web3";
import Makers from "./components/About/Makers";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <body>
        <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Navbar></Navbar>
                <Home></Home>
                <Footer></Footer>
              </Route>
              <Route path="/pg">
                <Pg></Pg>
                <Footer></Footer>
              </Route>
              <Route path="/library">
                <Lib></Lib>
                <Footer></Footer>
              </Route>
              <Route path="/food">
                <Food></Food>
                <Footer></Footer>
              </Route>
              {/* <Route path="/foodiegenie-admin"> */}
                {/* <Navbar></Navbar> */}
                {/* <AppFood></AppFood>
              </Route> */}
              <Route path="/foodiegenie-owner">
                {/* <Navbar></Navbar> */}
                <AppFood></AppFood>
              </Route>
              <Route path="/foodiegenie">
                {/* <Navbar></Navbar> */}
                <AppFood></AppFood>
              </Route>
              <Route path="/foodiegenie-orders">
                {/* <Navbar></Navbar> */}
                <AppFood></AppFood>
              </Route>
              <Route path="/transactions">
                {/* <Navbar></Navbar> */}
                <Adminpg></Adminpg>
              </Route>
              <Route path="/pgconnect">
                {/* <Navbar></Navbar> */}
                <Adminpg></Adminpg>
              </Route>
              <Route path="/landlords">
                {/* <Navbar></Navbar> */}
                <Adminpg></Adminpg>
              </Route>
              <Route path="/lib-ebook">
                <Applib></Applib>
              </Route>
              <Route path="/lib-notes">
                <Applib></Applib>
              </Route>
              {/* <Route path="/lib">
                <Lib></Lib>
                <Footer></Footer>
              </Route> */}
              {/* <Route path="/lib-admin">
                <Applib></Applib>
              </Route> */}
              <Route path="/lib-librarian">
                {/* <Navbar></Navbar>
                <Adminl></Adminl> */}
                <Applib></Applib>
              </Route>
              {/* ===================== */}
              <Route path="/admin">
                <Applib></Applib>
                <Adminpg></Adminpg>
                <AppFood></AppFood>
              </Route>
              <Route path="/admin-notifications">
                <Applib></Applib>
                <Adminpg></Adminpg>
              </Route>
              {/* ==================== */}
              <Route path="/about-us">
                <Navbar></Navbar>
                <Makers></Makers>
                <Footer style={{ marginTop: "-20px" }}></Footer>
              </Route>
            </Switch>
          </Router>
        </div>
      </body>
    );
  }
}
export default App;
