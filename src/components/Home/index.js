import React, { Component } from 'react';
import homePageImg from '../../images/homeImg.jpg';
import Logo from '../../images/logoBlue.png';
import "./index.css";

export class Home extends Component {
  render() {
    return (
      <div className="img-bckgd">
          {/* Mobile view, hidden in desktop view */}
          <div className="mobile-header">
            <h1 id="name">Zac Seewald</h1>
            <h4 id="title">Full Stack Web Developer</h4>
          </div>
          {/* Desktop view, hidden on mobile view */}
          <img className="home-img" src={homePageImg} alt="Logo Zac Seewald - Web Developer" />
          <img className="logo" src={Logo} />
      </div>
    )
  }
}

export default Home;
