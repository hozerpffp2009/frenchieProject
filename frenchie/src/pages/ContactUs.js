import React, {Component} from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ContactUs extends Component {
  render() {
    return (
      <body>
        <header>
          <h1>Contact Us</h1>
        </header>
        <Card className="contact-card">
          <Card.Header>Alamo City Frenchie Cartel</Card.Header>
          <Card.Body>
            <Card.Title>Jaime Arredondo</Card.Title>
            <Card.Text>
              If you wish to inquire purchasing merchandise and or inquire about becoming a breeder yourself:
            </Card.Text>
            <Button variant="primary" href="mailto: jaimearredondo05@gmail.com">Click Here</Button>
          </Card.Body>
        </Card>
      </body>
    );
  }
}

export default ContactUs;
