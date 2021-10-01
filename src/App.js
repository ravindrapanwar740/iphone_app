import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import List from "./components/Phone";
import About from "./components/About";
import Support from "./components/Support";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faList,
  faInfoCircle,
  faQuestionCircle,
  faSearch,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import Count from "./components/Count";
import Search from "./components/Search";
import List2 from "./components/List2";
import AddPhone from "./components/AddPhone";
import Phones from "./components/Phone";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Phones /> */}
        {/* <List2 />  */}
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link href="#home">
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} />
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/search">
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
                Search
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/phones">
                  <FontAwesomeIcon icon={faList} />
                </Link>
                Phones
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/list2">
                  <FontAwesomeIcon icon={faList} />
                  List
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/addphone">
                  <FontAwesomeIcon icon={faPlusSquare} />
                </Link>
                AddPhone
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </Link>
                About
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to="/support">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Link>
                Support
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

{
  /* <Link to=""><FontAwesomeIcon icon={faHome} /> Home </Link> */
}
{
  /* <Link to="/search"><FontAwesomeIcon icon={faSearch} />Search </Link> */
}
{
  /* <Link to="/phones"><FontAwesomeIcon icon={faList} />Phones </Link> */
}
{
  /* <Link to="/list2"><FontAwesomeIcon icon={faList} />List </Link> */
}
{
  /* <Link to="/addphone"><FontAwesomeIcon icon={faPlusSquare} />AddPhone </Link> */
}
{
  /* <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} />About </Link> */
}
{
  /* <Link to="/support"><FontAwesomeIcon icon={faQuestionCircle} />Support </Link> */
}
