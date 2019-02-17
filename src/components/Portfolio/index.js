import React, { Component } from 'react';
import './index.css';

export class Portfolio extends Component {

    state={
        target: "_blank",
    }

  render() {
    return (
      <div>
          <h1 className="header-portfolio">Portfolio Work</h1>

          <div className="link-site">
            <a href={ "https://zoopoc.herokuapp.com/" } target={ this.state.target }><h3 className="link-apps">ZooPoc</h3></a>
            <br></br>
            <a href={ "https://construct-js.herokuapp.com/" } target={ this.state.target }><h3 className="link-apps">The Construct</h3></a>
          </div>
      </div>
    )
  }
}

export default Portfolio;
