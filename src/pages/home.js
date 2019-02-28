import React, { Component } from 'react'
import HomeImage from '../components/Home';
import AppCard from '../components/AppCard';
import ProfLinks from '../components/ProfLinks';

export class home extends Component {
  render() {
    return (
      <div>
        <HomeImage />
        <AppCard />
        <ProfLinks />
      </div>
    )
  }
}

export default home;
