import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="./" className="link">Home</a>
        <a href="./frenchie" className="link">Frenchie Nation</a>
        <a href="./newPups" className="link">Newest Additions</a>
        <a href="./merchandise" className="link">Merchandise</a>
        <a href="./contactUs" className="link">Contact Us</a>
      </footer>
    );
  }
}

export default Footer;
