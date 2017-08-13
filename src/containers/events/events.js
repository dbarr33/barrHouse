import React, { Component } from 'react';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import Event from '../../assets/event.jpg';

class Events extends Component {
  render() {
    return (
      <div className="App">
        <HeaderImage image={Event} />
        <SectionHeaders value={'Events'} />
      </div>
    );
  }
}

export default Events;
