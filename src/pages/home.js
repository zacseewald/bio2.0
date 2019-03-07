import React, { Component } from 'react'
import HomeImage from '../components/Home';
import AppCardReact from '../components/AppCardReact';
import AppCardCSS from '../components/AppCardCSS';
import ProfLinks from '../components/ProfLinks';

export class home extends Component {
  render() {
    return (
      <div>
        <HomeImage />
        <AppCardReact />
        <AppCardCSS />
        <ProfLinks />
      </div>
    )
  }
}

export default home;
