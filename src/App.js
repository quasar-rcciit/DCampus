import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';

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
        </Switch>
        </Router>
        </div>
        </body>  
  );
}

export default App;
