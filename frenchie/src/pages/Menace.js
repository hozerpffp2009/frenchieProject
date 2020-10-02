import React, {Component} from "react";
import menaceimg from "../images/menace.jpeg";

class Menace extends Component {
  render() {
    return (
      <body className="menace-wrap">      
          <header>
            <h1 className="menace-header">Menace</h1>
          </header>
          <div className="container">
            <img src={menaceimg} alt="menace"></img>
          </div>      
      </body>
    );
  }
}

export default Menace;
