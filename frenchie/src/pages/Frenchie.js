import React, {Component} from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ModalImage from "react-modal-image";
import menaceimg from "../images/menace.jpeg";
import menacelg from "../images/menacelg.JPG";
import menace01 from "../images/menace01.JPG";
import menace02 from "../images/menace02.JPG";
import menace1sm from "../images/menace1sm.jpg";
import menacesm2 from "../images/menacesm2.jpg";

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
              <ModalImage small={menaceimg} large={menacelg} alt="menace" />
              <br></br>
              <ModalImage small={menace1sm} large={menace01} alt="menace" />
              <br></br>
              <ModalImage small={menacesm2} large={menace02} alt="menace" />
            </div>
          </ScrollableAnchor>
        </div>
      </body>
    );
  }
}

export default Frenchie;
