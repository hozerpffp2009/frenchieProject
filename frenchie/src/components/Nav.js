import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {MDBBtn} from "mdbreact";

class Nav extends Component {
  render() {
    return (
      <nav className="dropdown">
        <MDBBtn className="dropbtn">Menu</MDBBtn>
        <div className="dropdown-content">
          <a href="./">Home</a>
          <a href="./menace">Menace</a>
          <a href="./merchandise">Merchandise</a>
        </div>
      </nav>
    );
  }
}

export default Nav;
