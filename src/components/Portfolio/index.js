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
              <div className="card">
                  <h3>ZooPocalypse</h3>
                  <a href={ "https://zoopoc.herokuapp.com/" } target={ this.state.target }>
                    <img className="app-gif" src={ZopocIMG}></img>
                  </a>
                  
                  <p className="info-app">Aimed at early readers from ages 4-7 years of age. The goal of this app is to make spelling a game and rewarding the player through their own accomplishment. </p>
                </div>
    {/* The Construct App Link and Image  */}
                <div >
                    <a href={ "https://construct-js.herokuapp.com/" } target={ this.state.target }>
                        <img className="app-gif" src={PalindromeIMG}></img>
                      </a>
                      <h3>The Construct</h3>
                      <p className="info-app">This app is focused on young children up to age 7 learning to read. The opjective it to spell the name of the animal to free it from it's cage.</p>
                  </div>
          </div>
      </div>
    )
  }
}

export default Portfolio;
