import React, {Component} from "react";
import menaceimg from "../images/menace.jpeg";
import ModalImage from "react-modal-image";
import menacelg from "../images/menacelg.JPG";
import menace01 from "../images/menace01.JPG";
import menace02 from "../images/menace02.JPG";
import menace1sm from "../images/menace1sm.jpg";
import menacesm2 from "../images/menacesm2.jpg";

class Menace extends Component {
  render() {
    return (
      <body className="menace-wrap">      
          <header>
            <h1 className="menace-header">Menace</h1>
          </header>
          <div className="container">
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
          </div>      
      </body>
    );
  }
}

export default Menace;
