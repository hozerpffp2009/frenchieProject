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
              <div>
                <h3 className="menace-title">Menace Bio</h3>
              </div>
              <br></br>
              <div>
                <p>
                  Cras in quam non ligula dignissim egestas a et odio. Curabitur
                  tincidunt id tortor eget tristique. Cras convallis mi quis
                  tristique luctus.
                </p>
              </div>
              <img src={menaceimg} alt="menaces"></img>
            </div>
          </ScrollableAnchor>
        </div>
      </body>
    );
  }
}

export default Frenchie;
