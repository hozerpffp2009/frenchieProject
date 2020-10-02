import React, {Component} from "react";
import tanga1 from "../images/tanga1.jpeg";
import tanga2 from "../images/tanga2.jpeg";
import tanga3 from "../images/tanga3.jpeg";
import tanga4 from "../images/tanga4.jpeg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class Merchandise extends Component {
  render() {
    return (
      <div>
        <h1 className="h1-Tanga">Tanga par los perros</h1>
        <div className="merch-container">
          <div className="carousel">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={40}
              totalSlides={5}
            >
              <Slider>
                <Slide index={0}>
                  <img
                    src={tanga1}
                    class="mySlides"
                    alt="nachos"
                    width="30%"
                    height="90%"
                  ></img>
                  <div class="text"></div>
                </Slide>
                <Slide index={1}>
                  <img
                    src={tanga2}
                    class="mySlides"
                    alt="ribs"
                    width="30%"
                    height="90%"
                  ></img>
                  <div class="text"></div>
                </Slide>
                <Slide index={2}>
                  <img
                    src={tanga3}
                    class="mySlides"
                    alt="sopapilla"
                    width="30%"
                    height="90%"
                  ></img>
                  <div class="text"></div>
                </Slide>
                <Slide index={3}>
                  <img
                    src={tanga4}
                    class="mySlides"
                    alt="pizza quesadilla"
                    width="30%"
                    height="90%"
                  ></img>
                  <div class="text"></div>
                </Slide>
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default Merchandise;
