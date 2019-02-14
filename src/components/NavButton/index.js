import React, { Component } from 'react';
import './index.css';

export class NavButton extends Component {
state = {
    bgColor: "black",
    lineH: ".18em",
    lineW: "30px",
    isClicked: false,
    display: "block",
    centerBarmargin: ".34em",
}

handleClick = (e) => {
  e.preventDefault();
  !this.state.isClicked ? this.setState({
    display: "none",
    isClicked: true,
    centerBarmargin: "25%",
    lineH: "30px",
    lineW: ".19em",
  })
  :
  this.setState({
    display: "block",
    isClicked: false,
    centerBarmargin: ".34em",
    lineH: ".18em",
    lineW: "30px",
  })
  console.log(this.state.isClicked)
}

  render() {
    return (
      <div className="button-border" onClick={this.handleClick}>

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
    )
  }
}

export default NavButton;
