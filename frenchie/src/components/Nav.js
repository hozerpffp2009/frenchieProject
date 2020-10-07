import React, {Component} from "react";
import { Navbar } from "react-bootstrap";

class Nav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navebar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.link href="#home">Home</Nav.link>
          <Nav.link href="#frenchie">Frenchie Nation</Nav.link>
          <Nav.link href="#newPups">Newest Additions</Nav.link>
          <Nav.link href="#merchandise">Merchandise</Nav.link>
          <Nav.link href="#aboutUs">About Us</Nav.link>
          <Nav.link href="#contactUs">Contact Us</Nav.link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;
