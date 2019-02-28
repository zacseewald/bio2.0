import React, { Component } from 'react';
import gitLogo from "../../images/githubLogo.png";
import LinkedIn from "../../images/linkedinLogo.png";
import './index.css';

export class ProfLinks extends Component {
  state = {
    target: "_blank"
  }
  render() {
    return (
     
            <div className="prof-links">

              <a href={ "https://github.com/zacseewald" } target={ this.state.target }>
                <img className="github" src={gitLogo} height="40px" alt="github Zac Seewald" />
              </a>

              <a href={ "https://www.linkedin.com/in/zacseewald/" } target={ this.state.target }>
                <img className="linkedin" src={LinkedIn} alt="linkedin Zac Seewald" />
              </a>    
          </div>
     
    )
  }
}

export default ProfLinks;
