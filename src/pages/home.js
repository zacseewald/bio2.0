import React, { Component } from 'react'
import HomeImage from '../components/Home';
import AppCard from '../components/AppCard';

export class home extends Component {
  render() {
    return (
      <div>
        <HomeImage />
        <AppCard />
      </div>
    )
  }
}

export default home;
