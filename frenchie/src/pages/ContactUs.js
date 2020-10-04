import React, {Component} from "react";
import Fade from "react-reveal/Fade";

class ContactUs extends Component {
    render() {
      return (
        <div className="container-about">
             <h1 className="about-h1">
                <Fade bottom cascade>
                  About Us
                </Fade>
              </h1>
          <div className="about">
            <div className="about-content">
              <Fade bottom>
                <p>
                  Cras in quam non ligula dignissim egestas a et odio. Curabitur
                  tincidunt id tortor eget tristique. Cras convallis mi quis
                  tristique luctus. Vivamus vitae mollis sapien. Donec aliquam et
                  ex non euismod. Integer lacinia, ante at bibendum molestie,
                  neque sapien eleifend arcu, et aliquet lacus velit eu nisi.
                  Suspendisse tristique convallis lorem, pellentesque pulvinar
                  metus feugiat ac. Sed pellentesque, orci non efficitur euismod,
                  dolor eros commodo sapien, id posuere arcu sapien quis nisi. In
                  massa dui, commodo non placerat et, molestie eu tellus. Aliquam
                  a aliquet libero, quis venenatis diam. Donec vel felis eros.
                  Pellentesque molestie, lacus at porta iaculis, dui diam volutpat
                  mi, ultrices tincidunt justo lorem in augue.
                </p>
              </Fade>
              <br></br>
              <Fade bottom>
                <p>
                  Donec eu sapien in diam posuere maximus sit amet et augue.
                  Vestibulum condimentum tincidunt tempus. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Etiam eget erat velit. In tristique placerat neque a
                  porta. Morbi imperdiet mi in dolor suscipit, in interdum libero
                  consequat. Cras blandit rutrum ex. Suspendisse nec quam
                  vehicula, viverra justo semper, egestas sapien. Sed ut varius
                  tortor, ac mattis nibh. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Pellentesque tincidunt velit quis nisl
                  sollicitudin congue. Curabitur ut nibh neque. Morbi elementum
                  rhoncus dolor eget interdum. Fusce nec augue volutpat, lobortis
                  urna ut, ultrices turpis. Ut eget elementum ipsum. Quisque
                  lacinia rutrum turpis sit amet tempor.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      );
    }
  }

  export default ContactUs;