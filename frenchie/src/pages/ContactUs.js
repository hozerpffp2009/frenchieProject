import React, {Component} from "react";

class ContactUs extends Component {
  render() {
    return (
      <body>
        <header>
          <h1>Contact Us</h1>
        </header>
        <div className="container-contact">
          <form
            action="mailto:hozerpffp2009@gmail.com"
            method="POST"
            encType="multipart/form-data"
            name="emailForm"
          >
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstName"
              placeholder="Your First Name"
              required
            ></input>
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastName"
              placeholder="Your Last Name"
              required
            ></input>
               <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
              required
            ></input>
            <label for="Country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="switzerland">Switzerland</option>
              <option value="japan">Japan</option>
              <option value="germany">Germany</option>
              <option value="unitedkingdom">United Kingdom</option>
              <option value="sweden">Sweden</option>
              <option value="netherlands">Netherlands</option>
              <option value="china">China</option>
            </select>
            <label for="subject">Subject</label>
            <textarea
            type="text"
            maxLength="1000"
              id="subject"
              name="message"
              placeholder="Input text here..."
              required
            ></textarea>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </body>
    );
  }
}

export default ContactUs;
