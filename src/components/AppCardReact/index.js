import React, { Component } from 'react';
import zIMG from "../../images/zopoc.gif";
import constructIMG from "../../images/palindrome.gif";
import zspIMG from "../../images/zspIMG";
import "./index.css";

export class AppCardReact extends Component {
    state={
        target: "_blank",
    }
  render() {
    return (
      <div>
      <div id="label-appCard" class="label-appCard-react">
          <header anchor="middle">Reac JS Apps</header>
      </div>
      <div id="card-style" className="container">
        <div className="wrapper">
            <a href={ "https://zoopoc.herokuapp.com/" } target={ this.state.target }>
              <button>ZooPocalypse</button>
            </a>
            <img id="img-style" src={zIMG} ></img>
            <h5>Description:</h5>
            <p id="info">Aimed at early readers from ages 4-7 years of age. The goal of this app is to make spelling a game and rewarding the player through their own accomplishment.</p>
        </div>

        <div className="wrapper">
            <a href={ "https://construct-js.herokuapp.com/" } target={ this.state.target }>
                <button>The Construct</button>
            </a>
            <img id="img-style" src={constructIMG} ></img>
            <h5>Description:</h5>
            <p id="info">As I complete JavaScript coding challenges, I needed a playground to implement these challenges in React. Thus, The Construct was born. It is also a place where I can custom build and test components such as navigation to use in other applications.</p>
        </div>

        <div className="wrapper">
            <a href={ "http://zacseewaldphotography.com/" } target={ this.state.target }>
                <button>ZSP</button>
            </a>
            <img id="img-style" src={zspIMG} ></img>
            <h5>Description:</h5>
            <p id="info">This site is designed to showcase my portfolio of photography work. I designed it so the user can move through the site very quickly and efficiently. It is all about the imagery and branding recognition. The audience has very little patience for unnecessary UX, they are interested in seeing the work and making a quick decision as to whether or not my work aligns with their needs.</p>
        </div>
      </div>
      </div>
    )
  }
}

export default AppCardReact;
