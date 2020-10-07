import React, {Component} from "react";
import ModalImage from "react-modal-image";
import {Carousel, Jumbotron} from "react-bootstrap";
import harness1Sm from "../images/harness1Sm.jpg";
import harness2Sm from "../images/harness2Sm.jpg";
import harness3Sm from "../images/harness3Sm.jpg";
import harness4Sm from "../images/harness4Sm.jpg";
import harnesslg1 from "../images/harnesslg1.jpg";
import harnesslg2 from "../images/harnesslg2.jpg";
import harnesslg3 from "../images/harnesslg3.jpg";
import harnesslg4 from "../images/harnesslg4.jpg";

class Harness extends Component {
  render() {
    return (
      <body>
        <Jumbotron>
          <h1>Newest Harness</h1>
        </Jumbotron>
        <Carousel className="merch">
          <Carousel.Item>
          <ModalImage small={harness1Sm} large={harnesslg1} alt="Harness" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <ModalImage small={harness2Sm} large={harnesslg2} alt="Harness" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <ModalImage small={harness3Sm} large={harnesslg3} alt="Harness" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <ModalImage small={harness4Sm} large={harnesslg4} alt="Harness" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </body>
    );
  }
}

export default Harness;
