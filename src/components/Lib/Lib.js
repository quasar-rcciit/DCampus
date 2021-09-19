import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Display from "./Display";
import DisplayStudent from "./DisplayStudent";

export default function Lib() {
  return (
    <>
      <Router>
        <Switch>
          {/* ========================================= Students (View Books) ========================================= */}
          <Route path="/library">
            <Navbar></Navbar>
            <Display></Display>
          </Route>

          {/* ========================================= Students (View Books) ========================================= */}
          <Route path="/lib-student">
            <Navbar></Navbar>
            <DisplayStudent></DisplayStudent>
          </Route>
        </Switch>
      </Router>
      {/* <Navbar></Navbar>
      <Display></Display> */}
    </>
  );
}
