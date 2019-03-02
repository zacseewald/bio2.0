import React, { Component } from 'react'
import Contact from "../components/Contact";
import ProfLinks from '../components/ProfLinks';

export class contact extends Component {
  
  render() {
    return (
      <div style={{ background: "#393f4d",  }}>
        <Contact />
        <ProfLinks />
      </div>
    )
  }
}

export default contact;
