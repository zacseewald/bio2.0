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
          <h1 className="logo-contact">CONTACT</h1>
        
        </div>

        <div className="container-links">
          
          </div>   
                
                        <div className="data-container">
                          <p className="text-p">WANT TO EMAIL ME?</p>
                          <a className="links" href={ "mailto: zacseewald@gmail.com"}>zacseewald@gmail.com</a>
                          <p className="text-p" style={{ marginTop: "2em",}}> HOW ABOUT A COPY OF MY RESUME?</p>
                          <a className="links" href={ "mailto: zacseewald@gmail.com?subject=Resume Request"}>Request A Copy</a>
                        <div className="prof-links">
                          <a href={ "https://github.com/zacseewald" } target={ this.state.target }>
                              <img className="github" src={gitLogo} height="40px" alt="github Zac Seewald" />
                            </a>
                            <a href={ "https://www.linkedin.com/in/zacseewald/" } target={ this.state.target }>
                              <img className="linkedin" src={LinkedIn} alt="linkedin Zac Seewald" />
                            </a>
                      
                  </div>
                 
                  <div className="portrait">
                    <img  src={ZaxPort} style={{ height: "20em", }}/>
                    <p style={{ color: "grey", }}>Zac Seewald</p>
                  </div>
                 
                  </div>
                </div>

        </div>
    
    
    )
  }
}

export default Contact;
