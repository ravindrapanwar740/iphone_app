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

  /* <div className="img-wrapper img"> */
          /* <img src="https://1000logos.net/wp-content/uploads/2017/02/iPhone_logo.png"/> */
        /* <img src="https://www.cnet.com/a/img/resize/f6093236f9bf49ee626991d3d84d6b2a7151191e/hub/2018/12/18/1a5125ef-d67f-4349-be68-65c7a32a96cb/all-the-iphones-0070.jpg?auto=webp&fit=crop&height=675&width=1200" />   */
        /* <img src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP830/sp830-iphone12-ios14-2x.png" /> */
       /* <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000" /> */
