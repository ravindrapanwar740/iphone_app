
import About from "./About";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React, { Component } from 'react'

class Phones extends Component {
constructor(props) {
    super(props);

    this.state = {
         count:1,
    }
};
countNumber() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count)
  }
  dcountNumber() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count)
  }

    render() {
        return (
    
    <div>
      <h1>Iphone World:</h1>

      <div className=""><h1>{this.state.count}</h1></div>

      <div className="cart-count">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
     </div>

      <div className="img-iphoneten img">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000" />
      <span>Iphone 12</span>
      <div className="btn-wrapper button">
      <button onClick={()=>{this.countNumber()}}>Add to cart</button>
      <button onClick={()=>{this.dcountNumber()}}>Remove to cart</button>
      </div></div>

       <div className="img-iphoneten img">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418" />
        <span>Iphone 11</span>
        <div className="btn-wrapper button">
        <button onClick={()=>{this.countNumber()}}>Add to cart</button>
      
      </div> </div>

      <div className="img-iphoneten img">
        <img src="https://s3.envato.com/files/233552909/001.jpg" />
        <span>Iphone 10</span>
        <div className="btn-wrapper button">
        <button onClick={()=>{this.countNumber()}}>Add to cart</button>
      
      </div> </div>

      <div className="img-iphoneten img">
        <img src="https://static.toiimg.com/thumb/resizemode-4,msid-64171538,imgsize-500,width-800/64171538.jpg" />
        <span>Iphone 9</span>
        <div className="btn-wrapper button">
        <button onClick={()=>{this.countNumber()}}>Add to cart</button>
      
      </div> </div>

      <div className="img-iphoneten img">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone8plus-spacegray?wid=1400&hei=1400&fmt=jpeg&qlt=95&.v=1564083513793" />
        <span>Iphone 8</span>
        <div className="btn-wrapper button">
        <button onClick={()=>{this.countNumber()}}>Add to cart</button>
      
      </div> </div>

      <div className="img-iphoneten img">
        <img src="https://www.gizmochina.com/wp-content/uploads/2016/09/iphone7-plus-5-1-500x500.jpg" />
        <span>Iphone 7</span>
        <div className="btn-wrapper button">
        <button onClick={()=>{this.countNumber()}}>Add to cart</button>
        </div> </div> 

      
    </div> 
 
     
  );
}
}
export default Phones;
