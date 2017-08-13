import React, { Component } from 'react';

import BarrHouse from '../../assets/barr-house.jpg';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <HeaderImage image={BarrHouse} />
        <SectionHeaders value={'Home'} />
      </div>
    );
  }
}

export default Home;
