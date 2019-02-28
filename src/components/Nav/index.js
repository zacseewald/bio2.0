import React, { Component } from 'react';
import './index.css';

export class Nav extends Component {
  state = {
            isClicked: true, //nav
            displayNav: "none", // nav
            backgroundColor: "transparent",
            bgColor: "rgb(179, 179, 179)",
            lineH: ".18em",
            lineW: "30px",
            isClickedBTN: false,// nav btn
            display: "block", // nav btn
            centerBarmargin: ".34em",
        }
// Handling the button behavior and the nav behavior
    handleNavButton = (e) => {
        e.preventDefault();
        !this.state.isClicked 
        ? 
        this.setState({
          isClickedBTN: true,
          centerBarmargin: ".34em",
          lineH: ".18em",
          lineW: "30px",
          isClicked: true,
          displayNav: "none",
          backgroundColor: "transparent",
          display: "block",
        })
        :
        this.setState({
          display: "none",
          isClickedBTN: false,
          centerBarmargin: "25%",
          lineH: "30px",
          lineW: ".19em",
          isClicked: false,
          displayNav: "block",
          backgroundColor: "rgba(000, 000, 000, .85)",
        });
      }
      // Resets the nav state when there is a click anywhere on the screen
      resetNav = (e)  => {
        this.setState({ 
          isClicked: true, //nav
          displayNav: "none", // nav
          backgroundColor: "transparent",
          bgColor: "pink",
          lineH: ".18em",
          lineW: "30px",
          isClickedBTN: false,// nav btn
          display: "block", // nav btn
          centerBarmargin: ".34em",
         })
      }
    
  render() {
    return (
      <div style={{ background: this.state.backgroundColor }}>
        <div onClick={this.handleNavButton}>

        <div className="button-border" onClick={this.handleNavButton}>

            <div  className="button-line-top"style={{ 
              backgroundColor: this.state.bgColor, 
              height: this.state.lineH, 
              width: this.state.lineW, 
              display: this.state.display, 
              }}></div>

            <div  className="button-line-center"style={{ 
              backgroundColor: this.state.bgColor, 
              height: this.state.lineH, 
              width: this.state.lineW, 
              marginTop: this.state.centerBarmargin
              }}></div>

            <div  className="button-line-bottum"style={{ 
              backgroundColor: this.state.bgColor, 
              height: this.state.lineH, 
              width: this.state.lineW, 
              display: this.state.display, 
              }}></div>
            </div>
          </div>    

        <div className="nav-page" style={{ backgroundColor: this.state.backgroundColor, display: this.state.displayNav }}>
           
          <div className="link-body">
            <h1 className="link-nav-Home"><a href="/">Home</a></h1>
            <h1 className="link-nav-Contact"><a href="/contact">Contact</a></h1>
            <h1 className="link-nav-Contact"><a href="/tech">Tech</a></h1>
            <h1 className="link-nav-Contact"><a href="https://www.linkedin.com/in/zacseewald/" target="_blank">LinkedIn</a></h1>
            <h1 className="link-nav-Contact"><a href="https://github.com/zacseewald" target="_blank">GitHub</a></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;