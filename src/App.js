//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
//import List from "./components/Phone";
import About from "./components/About";
import Support from "./components/Support";
import { BrowserRouter as Router, Link, Route, } from "react-router-dom";//Switch
import { Navbar, Nav,  } from "react-bootstrap";//Container

//import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faInfoCircle,
  faQuestionCircle,
  faSearch,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
//import Count from "./components/Count";
import Search from "./components/Search";
import List2 from "./components/List2";
import AddPhone from "./components/AddPhone";
import Phones from "./components/Phone";
import Containers from "./components/Containers";
//import User from "./redux_components/User";

class App extends Component {
  render() {
    return (
      <div className="icon">
        <Containers />
        <Router>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link href="#home">
                {" "}
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  <FontAwesomeIcon icon={faSearch} /> Search
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/phones">
                  <FontAwesomeIcon icon={faList} /> Phones
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list2">
                  <FontAwesomeIcon icon={faList} />
                  List
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
              
                <Link to="/addphone">
                  <FontAwesomeIcon icon={faPlusSquare} />
                  AddPhone
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                
                <Link to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                
                <Link to="/support">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  Support
                </Link>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/phones" component={Phones} />
          <Route path="/list2" component={List2} />
          <Route path="/addphone" component={AddPhone} />
          <Route path="/about" component={About} />
          <Route path="/support" component={Support} />
        </Router>
      </div>
    );
  }
}
export default App;





//<FontAwesomeIcon icon="faHome"></FontAwesomeIcon>

  /* <Link to=""><FontAwesomeIcon icon={faHome} /> Home </Link> */


  /* <Link to="/search"><FontAwesomeIcon icon={faSearch} />Search </Link> */


  /* <Link to="/phones"><FontAwesomeIcon icon={faList} />Phones </Link> */


  /* <Link to="/list2"><FontAwesomeIcon icon={faList} />List </Link> */


  /* <Link to="/addphone"><FontAwesomeIcon icon={faPlusSquare} />AddPhone </Link> */


  /* <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} />About </Link> */


  /* <Link to="/support"><FontAwesomeIcon icon={faQuestionCircle} />Support </Link> */

