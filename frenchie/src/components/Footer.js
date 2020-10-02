import React, { Component} from "react";
import {MDBBtn} from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h3>Contact Us:</h3>
                <div className="contact-content">
                    <h4>Jaime Arredondo</h4>
                    <MDBBtn className="contact-button" href="mailto: ">Email</MDBBtn>
                </div>
            </div>
        );
    }
}

export default Footer;