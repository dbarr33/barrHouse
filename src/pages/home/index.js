import React, { Component } from 'react';

import BarrHouse from '../../assets/barr-house.jpg';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <HeaderImage image={BarrHouse} />
        <SectionHeaders
          value={'Home'}
          text={copy}
        />
      </div>
    );
  }
}

const copy = `Be prepared to drive up to a beautiful antebellum home and you will feel like
Scarlett returning to Tara in Gone with the Wind. The Barr House Inn was built
approximately 1859-1860 and was built as an impressive Gothic Revival dwelling
but after a fire in 1971, the front exterior was remodeled with huge pillars in the
antebellum style. The Barr House Inn is both an event space utilizing the
downstairs rooms of the house and an Airbnb with three types of bedroom spaces
upstairs. As you enter the Barr House Inn through the two stone pillars, you
immediately see the beautiful fountain which came from Savannah, Georgia and
stood in one of the beautiful parks of that City. For those renting an
accommodation at the Barr House Inn, you will have access to the common areas
which include a stunning entry way with sparkling chandelier and majestic pier
mirror, beautiful living room with classic chandelier for conversation in the front
of the house, the Bar Room with a bar and big screen Smart TV, formal dining
room, a commercial kitchen and a swimming pool. The yard is large enough to
accommodate almost any activity that you would like to participate in. There is
room for kickball, badminton, Bocce, horseshoes, croquet and many more of your
favorite types of lawn games. So bring them with you and we will provide some
also.`;

export default Home;
