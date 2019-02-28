import React, { Component } from 'react';
import zIMG from "../../images/zopoc.gif";
import constructIMG from "../../images/palindrome.gif";
import "./index.css";

export class AppCard extends Component {
    state={
        target: "_blank",
    }
  render() {
    return (
      <div id="card-style">
        <div className="wrapper">
            <a href={ "https://zoopoc.herokuapp.com/" } target={ this.state.target }>
              <button>ZooPocalypse</button>
            </a>
            <img id="img-style" src={zIMG} ></img>
            <h5 style={{ marginTop: ".5em" }}>Discription:</h5>
            <p id="info">Aimed at early readers from ages 4-7 years of age. The goal of this app is to make spelling a game and rewarding the player through their own accomplishment.</p>
        </div>

        <div className="wrapper">
            <a href={ "https://construct-js.herokuapp.com/" } target={ this.state.target }>
                <button>The Construct</button>
            </a>
            <img id="img-style" src={constructIMG} ></img>
            <h5 style={{ marginTop: ".5em" }}>Discription:</h5>
            <p id="info">This app is built for implementation of JavaScript functions created for general use, as well designing, building and testing various components in React JS</p>
        </div>

        <div className="wrapper">
            <a href={ "https://construct-js.herokuapp.com/" } target={ this.state.target }>
                <button>The Construct</button>
            </a>
            <img id="img-style" src={constructIMG} ></img>
            <h5 style={{ marginTop: ".5em" }}>Discription:</h5>
            <p id="info">This app is built for implementation of JavaScript functions created for general use, as well designing, building and testing various components in React JS</p>
        </div>

      </div>
    )
  }
}

export default AppCard;
