import React, { Component } from 'react';
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
        <div className="tech-body" >
        {/* header image and TECH logo */}
            <div className="img-bckgd">
                      {/* Mobile view, hidden in desktop view */}
          <div className="mobile-header">
            <h1 id="name">Zac Seewald</h1>
            <h4 id="title">Full Stack Web Developer</h4>
          </div>
          {/* Desktop view, hidden on mobile view */}
              <img className="tech-img" src={TechImg} alt="linkedin Zac Seewald" />
              <h1 className="logo-tech">TECH</h1>
              </div>
          </div>
        {/* tech component will go here: */}
{/* Row 1 */}
              <div className="container">
                    
                    
                    
                    <div className="row title-row">
                        <h4 className="effect1" id="tech-title" >Front End Techologies</h4>
                      </div>

                    <div className="row row-one">
                        <img className="tech-logo" src={HtmlLogo} alt="HTML5 Logo" />
                        <img className="tech-logo" src={cssLogo} alt="CS3# JS Logo" />
                        <img className="tech-logo" src={jsLogo} alt="JS Logo" />
                    </div>
{/* Row 2 */}
                    <div className="row">
                        <img className="tech-logo" src={reactLogo} alt="React JS Logo" />
                        <img className="tech-logo" src={jqueryLogo} alt="JQuery JS Logo" />
                        <img className="tech-logo" src={bulmaLogo} alt="Bulma Logo" />
                    </div>
{/* Row 3 */}
                   <div className="row, title-row">
                      <h4 className="effect1" id="tech-title" >Back End Techologies</h4>
                    </div>
                    
                    <div className="row row-one">
                        <img className="tech-logo" src={nodeLogo} alt="Node JS Logo" />
                        <img className="tech-logo" src={expressLogo} alt="Express Logo" />
                        <img className="tech-logo" src={sequelizeLogo} alt="Sequelize Logo" />
                    </div>
        </div>
      </div>
    )
  }
}

export default Contact;
