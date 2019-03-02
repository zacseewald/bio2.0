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
          {/* Mobile view, hidden in desktop view */}
          <div className="mobile-header">
            <h1 id="name">Zac Seewald</h1>
            <h4 id="title">Full Stack Web Developer</h4>
          </div>
          
          <img className="contact-img" src={ContactImg} alt="linkedin Zac Seewald" />
          <h1 className="logo-contact">CONTACT</h1>
        </div>
        <div className="container-links"></div> 
          <div className="data-container">
            <p className="text-p">WANT TO EMAIL ME?</p>
            <a className="links" href={ "mailto: zacseewald@gmail.com"}>zacseewald@gmail.com</a>
            <p className="text-p" style={{ marginTop: "2em",}}> HOW ABOUT A COPY OF MY RESUME?</p>


            <div id="copy-link">
                <a className="links" href={ "mailto: zacseewald@gmail.com?subject=Resume Request"}>Request A Copy</a>
            </div>
       
            <div className="portrait">
              <img id="port-img"  src={ZaxPort} />
              <p id="port-img-p">Zac Seewald</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
