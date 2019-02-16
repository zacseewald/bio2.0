import React, { Component } from 'react';
import homePageImg from '../../images/homeImg.jpg';
import Logo from '../../images/logoBlue.png';
import "./index.css";

export class Home extends Component {
  render() {
    return (
      <div className="img-bckgd">
          <img className="home-img" src={homePageImg} alt="Logo Zac Seewald - Web Developer" />
          <img className="logo" src={Logo} />
      </div>
       
      
    )
  }
}

export default Home;
