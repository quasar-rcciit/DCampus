import React from 'react'
import './App.css'
//import Card from './components/Card';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pg from './components/Pg/Pg';
import Lib from './components/Lib/Lib';
import Food from './components/Food/Food';
import background from './assets/12175.jpg'
import Navbar from './components/Navbar';
import Adminf from './components/Food/Adminf';
import Adminpg from './components/Pg/Adminpg';
//import Adminl from './components/Lib/Adminl';
import Studentf from './components/Food/Studentf';
import Studentpg from './components/Pg/Studentpg';

function App() {
  return (
    <body>
      <div>
      <Router>
        <Switch>
        <Route exact path='/'>
              <Navbar></Navbar>
              <Home></Home>
        </Route>  
        <Route path='/pg'>
              <Pg></Pg>
        </Route>
        <Route path='/library'>
              <Lib></Lib>
        </Route>
        <Route path='/food'>
              <Food></Food>
        </Route>
        <Route path='/adminfood'>
          <Navbar>
          </Navbar>
          <Adminf></Adminf>
        </Route>
        <Route path='/studentfood'>
          <Navbar>
          </Navbar>
          <Studentf></Studentf>
        </Route>
        <Route path='/adminpg'>
          <Navbar></Navbar>
            <Adminpg></Adminpg>
          </Route>
          <Route path='/studentpg'>
          <Navbar></Navbar>
            <Studentpg></Studentpg>
          </Route>
          {/* <Route path='/adminl'>
          <Navbar></Navbar>
            <Adminl></Adminl>
          </Route> */}
        </Switch>
      </Router>
      <footer className="footerc">
        Developed by Quasar
      </footer>
      </div>
      </body> 
  );
}

export default App;
