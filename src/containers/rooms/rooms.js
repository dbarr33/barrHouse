import React, { Component } from 'react';

import Room1 from '../../assets/room-1.jpg';
import ImagePage from '../../components/home/imagePage';
import BarrHouse from '../../assets/barr-house.jpg';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import './rooms.css'

class Rooms extends Component {
  render() {
    return (
      <div className="roomsContainer">
        <HeaderImage image={BarrHouse} />
        <SectionHeaders value={'Rooms'} />
        <ImagePage
          description={`$${100} - $${150}`}
          title={"Room 1 Lorem ipsum dolor sit amet"}
          buttonTitle="Availability"
          image={Room1}
          path={"/rooms/Room1"}
        />
        <ImagePage
          description={`$${150} - $${200}`}
          title={"Room 2 Lorem ipsum dolor sit amet"}
          buttonTitle="Availability"
          image={Room1}
          path={"/rooms/Room2"}
        />
        <ImagePage
          description={`$${200} - $${250}`}
          title={"Room 3 Lorem ipsum dolor sit amet"}
          buttonTitle="Availability"
          image={Room1}
          path={"/rooms/Room3"}
        />
      </div>
    );
  }
}

export default Rooms;
