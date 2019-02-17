import React, { Component } from 'react'
import HomeImage from '../components/Home';
import Portfolio from '../components/Portfolio';

export class home extends Component {
  render() {
    return (
      <div>
        <HomeImage />
        <Portfolio />
      </div>
    )
  }
}

export default home;
