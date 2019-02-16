import React, { Component } from 'react';
import NavButton from '../NavButton/index';
import './index.css';

export class Nav extends Component {
  state = {
            isClicked: true,
            displayNav: "none",
            backgroundColor: "transparent",
            bgColor: "pink",
            lineH: ".18em",
            lineW: "30px",
            isClickedBTN: false,
            display: "block",
            centerBarmargin: ".34em",
        }
    // handleClick = (e) => {
    //    e.preventDefault();
    //    !this.state.isClickedBTN ? this.setState({
    //     display: "none",
    //     isClickedBTN: true,
    //      centerBarmargin: "25%",
    //      lineH: "30px",
    //      lineW: ".19em",
    //    })
    //    :
    //    this.setState({
    //      display: "block",
    //     isClickedBTN: false,
    //      centerBarmargin: ".34em",
    //     lineH: ".18em",
    //     lineW: "30px",
    //   })
    //    console.log(this.state.isClickedBTN)
    // }
    handleNavButton = (e) => {
        e.preventDefault();
        !this.state.isClicked 
        ? 
        this.setState({
          isClickedBTN: true,
          centerBarmargin: "25%",
          lineH: "30px",
          lineW: ".19em",
          isClicked: true,
          displayNav: "none",
          backgroundColor: "transparent",
          display: "none",
      
        })
        :
        this.setState({
          display: "block",
          isClickedBTN: false,
          centerBarmargin: ".34em",
          lineH: ".18em",
          lineW: "30px",
          isClicked: false,
          displayNav: "block",
          backgroundColor: "rgba(000, 000, 000, .85)",
         
        });
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
           
          <div>
            <h1 className="link-nav-Home"><a href="/">Home</a></h1>
            <h1 className="link-nav-Contact"><a href="/contact">Contact</a></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;