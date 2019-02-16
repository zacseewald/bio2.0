import React, { Component } from 'react';
import gitLogo from "../../images/githubLogo.png";
import LinkedIn from "../../images/linkedinLogo.png";
import ContactImg from "../../images/contactImg.jpg";
import ZaxPort from "../../images/zacPortBlackSQ.png";

import './index.css';

export class Contact extends Component {

  state = {
    target: "_blank"
  }
  render() {
    return (
    <div className="page-wrap">
        <div className="contact-body" >
        <div className="img-bckgd">
          <img className="contact-img" src={ContactImg} alt="linkedin Zac Seewald" />
          <h1 className="logo-contact">TECH</h1>
        </div>
        <div className="container-links"></div> 
          <div className="data-container">
            <p className="text-p">Some of the Tech I've got experience with goes on this page.</p>
            

        {/* tech component will go here: */}


          <div className="prof-links">
            <a href={ "https://github.com/zacseewald" } target={ this.state.target }>
              <img className="github" src={gitLogo} height="40px" alt="github Zac Seewald" />
            </a>
            <a href={ "https://www.linkedin.com/in/zacseewald/" } target={ this.state.target }>
              <img className="linkedin" src={LinkedIn} alt="linkedin Zac Seewald" />
            </a>    
          </div>
            <div className="portrait">
              
              <p style={{ color: "grey", }}>Contact Zac @ <a className="links" href={ "mailto: zacseewald@gmail.com"}> zacseewald@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
