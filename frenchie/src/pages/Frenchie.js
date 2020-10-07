import React, {Component} from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import menaceimg from "../images/menace.jpeg";

class Frenchie extends Component {
  render() {
    return (
      <body>
        <header>
          <h1>Frenchie Nation</h1>
          <br></br>
          <a href="#menace">Menace</a>
        </header>
        <div className="container">
          <ScrollableAnchor id={"menace"}>
            <div className="">
              <a href ="./menace"><img src={menaceimg} alt="menace"></img></a>
            </div>
          </ScrollableAnchor>
        </div>
      </body>
    );
  }
}

export default Frenchie;
