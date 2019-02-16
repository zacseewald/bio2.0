import React, { Component } from 'react';
import gitLogo from "../../images/githubLogo.png";
import LinkedIn from "../../images/linkedinLogo.png";
import HtmlLogo from "../../images/techLogos/htmlLogo.png";
import cssLogo from "../../images/techLogos/css3Logo.png";
import jsLogo from "../../images/techLogos/javascript.png";
import jqueryLogo from "../../images/techLogos/jqueryLogo.png";
import bulmaLogo from "../../images/techLogos/bulmaLogo.png";
import reactLogo from "../../images/techLogos/reactLogo.png";
import nodeLogo from "../../images/techLogos/nodeLogo.png";
import expressLogo from "../../images/techLogos/expressLogo.png";
import sequelizeLogo from "../../images/techLogos/sequelizeLogo.png";
import TechImg from "../../images/techImg.jpg";
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
          <img className="contact-img" src={TechImg} alt="linkedin Zac Seewald" />
          <h1 className="logo-contact">TECH</h1>
        </div>
        <div className="container-links"></div> 
          <div className="data-container">
            

        {/* tech component will go here: */}
              <div className="wrapper">
                    <div>
                        <img className="reactLogo tech-logo" src={HtmlLogo} alt="HTML5 Logo" />
                        <img className="nodeLogo tech-logo" src={cssLogo} alt="CS3# JS Logo" />
                        <img className="expressLogo tech-logo" src={jsLogo} alt="JS Logo" />
                    </div>
                    <div>
                        <img className="reactLogo tech-logo" src={reactLogo} alt="React JS Logo" />
                        <img className="nodeLogo tech-logo" src={jqueryLogo} style={{ height: "2.5em" }}alt="JQuery JS Logo" />
                        <img className="expressLogo tech-logo" style={{ height: "2.5em" }}src={bulmaLogo} alt="Bulma Logo" />
                    </div>
                    <div>
                        <img className="reactLogo tech-logo" src={sequelizeLogo} alt="Sequelize Logo" />
                        <img className="nodeLogo tech-logo" src={nodeLogo} alt="Node JS Logo" />
                        <img className="expressLogo tech-logo" style={{ height: "2.5em" }}src={expressLogo} alt="Express JS Logo" />
                    </div>
              </div>


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
