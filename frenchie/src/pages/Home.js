import React, {Component} from "react";
import logo from "../images/logo.JPG"
// import Fade from "react-reveal/Fade";

class Home extends Component {
  render() {
    return (
      <body>
     <header>
       <h1>Welcome</h1>
     </header>
     <div className="welcome-container">
       <p>  Cras in quam non ligula dignissim egestas a et odio. Curabitur
                  tincidunt id tortor eget tristique. Cras convallis mi quis
                  tristique luctus. Vivamus vitae mollis sapien. Donec aliquam et
                  ex non euismod. Integer lacinia, ante at bibendum molestie,
                  neque sapien eleifend arcu, et aliquet lacus velit eu nisi.
                  Suspendisse tristique convallis lorem, pellentesque pulvinar
                  metus feugiat ac.</p>
       <div>
       <img className="logo" src={logo} alt="Logo"></img>
       </div>
     </div>
     </body>
     
    );
  }
}

export default Home;
