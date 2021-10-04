import About from "./About";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Form, ListGroup, ListGroupItem } from "react-bootstrap";

class Phones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  countNumber() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }
  dcountNumber() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        {/* <h1>Iphone World:</h1> */}
        {/* <h1>This Phones are available in stock</h1> */}
        <div className="tag">
          <h1>{this.state.count}</h1>
        </div>

        <div className="cart-count">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
        </div>

        <div className="img-iphoneten img">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000" />
         <div className="name">
         <span>Iphone 12 $1000</span>
         </div>
         
          <ListGroup>
            <ListGroup.Item variant="secondary">
              <li>A super-powerful chip</li>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            {" "}
            <ListGroup.Item variant="secondary">
              <li>An advanced dual-camera system</li>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            {" "}
            <ListGroup.Item variant="secondary">
              <li>
                {" "}
                A Ceramic Shield front that’s tougher than any smartphone glass.
                And a bright, beautiful OLED display. iPhone 12 has it all — in
                two great sizes
              </li>
            </ListGroup.Item>
          </ListGroup>
          <br />
          <div className="btn-wrapper button">
            <button
              onClick={() => {
                this.countNumber();
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                this.dcountNumber();
              }}
            >
              Remove to cart
            </button>
          </div>
        </div>

        <div className="img-iphoneten img">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418" />
          <div className="name">
          <span>Iphone 11</span></div>
          <ListGroup>
            <ListGroup.Item variant="secondary">
              <li>iPhone models like the iPhone 13 mini.</li>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <li>Apple's larger models like the 6.7-inch</li>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <li>iPhone 13 Pro Max in size.</li>
            </ListGroup.Item>
          </ListGroup>
          <br />
          <div className="btn-wrapper button">
            <button
              onClick={() => {
                this.countNumber();
              }}
            >
              Add to cart
            </button>
          </div>{" "}
        </div>

        <div className="img-iphoneten img">
          <img src="https://s3.envato.com/files/233552909/001.jpg" />
         <div className="name">
         <span>Iphone 10</span>
         </div>
         
          <ListGroup>
            <ListGroup.Item variant="secondary">
              <li>You can buy the iPhone X 256GB for $679 from Apple.</li>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <li>
                You can also find iPhone X models will less storage starting at
                $299 on Amazon and $429 on Best Buy
              </li>
            </ListGroup.Item>
          </ListGroup>
          <br />         
           <div className="btn-wrapper button">
            <button
              onClick={() => {
                this.countNumber();
              }}
            >
              Add to cart
            </button>
          </div>{" "}
        </div>

        <div className="img-iphoneten img">
          <img src="https://static.toiimg.com/thumb/resizemode-4,msid-64171538,imgsize-500,width-800/64171538.jpg" />
          
          <div className="name">
         <span>Iphone 9</span>
         </div>
          <ListGroup>
            <ListGroup.Item variant="secondary">
              <li>
                the iPhone SE (second generation) is the closest thing to an
                iPhone 9 we'll ever get.
              </li>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <li>
                The iPhone X (which was actually pronounced as 'iPhone 10') is
                now completely discontinued
              </li>
            </ListGroup.Item>
          </ListGroup>
          <br />
          <div className="btn-wrapper button">
            <button
              onClick={() => {
                this.countNumber();
              }}
            >
              Add to cart
            </button>
          </div>{" "}
        </div>

        <div className="img-iphoneten img">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone8plus-spacegray?wid=1400&hei=1400&fmt=jpeg&qlt=95&.v=1564083513793" />
          
          <div className="name">
         <span>Iphone 8</span>
         </div>          <ListGroup>
            <ListGroup.Item variant="secondary">
              <li>
                The iPhone 8 has been launched alongside the more expensive
                iPhone X. .
              </li>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <li>
                It looks much like its predecessor, the iPhone 7, but introduces
                a new glass back to allow for wireless charging
              </li>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <li>
                It's available in Space Grey, Silver, and Gold, with 64GB and
                256GB storage options at launch time.
              </li>
            </ListGroup.Item>
          </ListGroup><br />
          <div className="btn-wrapper button">
            <button
              onClick={() => {
                this.countNumber();
              }}
            >
              Add to cart
            </button>
          </div>{" "}
        </div>

        <div className="img-iphoneten img">
          <img src="https://www.gizmochina.com/wp-content/uploads/2016/09/iphone7-plus-5-1-500x500.jpg" />
          <div className="name">
         <span>Iphone 7</span>
         </div>
          <ListGroup>
            <ListGroup.Item variant="secondary">
              <li>
                Apple iPhone 7 mobile was launched in September 2016. It comes
                with 2GB of RAM.
              </li>
            </ListGroup.Item>

            <ListGroup.Item variant="secondary">
              <li>
                The phone comes with a 4.70-inch touchscreen display with a
                resolution of 750x1334 pixels at a pixel density of 326 pixels
                per inch (ppi) and an aspect ratio of 16:9.
              </li>
            </ListGroup.Item>

            <ListGroup.Item variant="secondary">
              <li>
                Apple iPhone 7 is powered by a 2.34GHz quad-core Apple A10
                Fusion processor.
              </li>
            </ListGroup.Item>

            <ListGroup.Item variant="secondary">
              <li>
                The Apple iPhone 7 runs iOS 10 and is powered by a 1960mAh
                non-removable battery
              </li>
            </ListGroup.Item>
          </ListGroup>
          <br />
          <div className="btn-wrapper button">
            <button
              onClick={() => {
                this.countNumber();
              }}
            >
              Add to cart
            </button>
          </div>{" "}
        </div>
      </div>
    );
  }
}
export default Phones;
