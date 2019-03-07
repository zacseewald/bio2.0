import React, { Component } from 'react';
import zIMG from "../../images/zopoc.gif";
import constructIMG from "../../images/palindrome.gif";
import zspIMG from "../../images/zspIMG";
import svgIMG from "../../images/SR.png";
import "./index.css";

export class AppCard extends Component {
    state={
        target: "_blank",
    }
  render() {
    return ( 
        <div>
        <div id="label-appCard">
         <header anchor="middle">CSS/Sass Apps</header>
        </div>
      <div id="card-style" className="container">
       
        <div className="wrapper">
            <a href={ "https://zacseewald.github.io/svgSass-animation/" } target={ this.state.target }>
              <button>SVG MASK</button>
            </a>
            <img id="img-style" src={svgIMG} ></img>
            <h5>Description:</h5>
            <p id="info">This app is a simple example of a text clip-path with a video playing in the background to fill the text with motion. It's made with an svg tag, a text field and a clip-mask.<br /><br />Along with the clip-mask, it also shows how to use a gradient as a fill for the mask.<br /><br />
            ...really cool stuff.</p>
        </div>

        <div className="wrapper" id="calculator">
            <a href={ "#" } target={ this.state.target }>
                <button>The Calculator</button>
            </a>
            {/* <img id="img-style" src={constructIMG} ></img> */}
            {/* <h5>Description:</h5> */}
            <p id="info">Comming soon...</p>
        </div>

        <div className="wrapper" id="TBA">
            <a href={ "#" } target={ this.state.target }>
                <button>To Be Loaded...</button>
            </a>
            {/* <img id="img-style" src={zspIMG} ></img>
            <h5>Description:</h5> */}
            <p id="info">Comming soon ...</p>
        </div>

      </div>
      </div>
    )
  }
}

export default AppCard;
