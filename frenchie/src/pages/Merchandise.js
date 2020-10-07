import React, {Component} from "react";
import harnesslg1 from "../images/harnesslg1.jpg";
import {Jumbotron} from "react-bootstrap";
import {Image} from "react-bootstrap";
import {Card} from "react-bootstrap";

class Merchandise extends Component {
  render() {
    return (
      <body>
        <Jumbotron>
          <h1>Newest Merchandise</h1>
          <div className=""></div>
        </Jumbotron>
        <Card className="merch">
          <Card.Title>Harness</Card.Title>
          <a href="./harness">
            <Image className="merch-img" src={harnesslg1} roundedCircle />
          </a>
          <Card.Text>
            Our Harnesses are made with the highest quality of leather. They are
            designed to last for the long term
          </Card.Text>
        </Card>
      </body>
    );
  }
}

export default Merchandise;
