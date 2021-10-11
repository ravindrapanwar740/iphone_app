import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="img-wrapper img">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media0.giphy.com/media/26n79t82lmj989iAE/giphy.gif"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>IPHONE</h3>
              <p>Welcome to Iphone World</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.cultofmac.com/wp-content/uploads/2018/01/Live-photos-to-gif.gif"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>IPHONE</h3>
              <p className="nc">Change the World</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_iPhone-11-and-iPhone-11-Pro-reviews_091719_inline.gif.large.gif"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>IPHONE</h3>
              <p>Future is here</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Home;
