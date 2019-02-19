import React, { Component } from 'react';
import ZopocIMG from "../../images/zopoc.gif";
import PalindromeIMG from "../../images/palindrome.gif";
import './index.css';

export class Portfolio extends Component {

    state={
        target: "_blank",
    }

  render() {
    return (
      <div className="wrapper" >
          <div className="link-site">
    {/* ZooPocalypse App Link and Image */}
                <a href={ "https://zoopoc.herokuapp.com/" } target={ this.state.target }>
                  <img className="app-gif" src={ZopocIMG}></img>
                 </a>
    {/* The Construct App Link and Image  */}
                 <a href={ "https://construct-js.herokuapp.com/" } target={ this.state.target }>
                  <img className="app-gif" src={PalindromeIMG}></img>
                  </a>
          </div>
      </div>
    )
  }
}

export default Portfolio;
