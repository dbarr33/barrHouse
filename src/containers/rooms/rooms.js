import React, { Component } from 'react';

// Components
import BookOption from "../../components/book/bookOption";
import ImagePage from '../../components/home/imagePage';
import BarrHouse from '../../assets/barr-house.jpg';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

// Assets
import Room1 from '../../assets/room-1.jpg';

// Styles
import './rooms.css'

class Rooms extends Component {
  render() {
    return (
      <div className="roomsContainer">
        <HeaderImage image={BarrHouse} />
        <SectionHeaders value={'Rooms'} />
        <BookOption
          image={Room1}
          room={{ weekCost: 275, weekendCost: 350, cleaningFee: 150, deposit: 150 }}
          path={"/book/singleBed"}
          title="House - 3 Bedrooms, & 2 Baths"
        />
        <BookOption
          image={Room1}
          room={{ weekCost: 175, weekendCost: 175, cleaningFee: 100, deposit: 100 }}
          path={"/book/singleBed"}
          title="Apartment - 1 Bedroom, 1 Bath, Kitchen, and Den"
        />
        <BookOption
          image={Room1}
          room={{ weekCost: 150, weekendCost: 150, cleaningFee: 75, deposit: 75 }}
          path={"/book/singleBed"}
          title="Front Bedroom with Bath"
        />
        <BookOption
          image={Room1}
          room={{ weekCost: 100, weekendCost: 100, cleaningFee: 50, deposit: 50 }}
          path={"/book/singleBed"}
          title="Second Bedroom (Shared Bath)"
        />
        <div className="finePrint">
          Taxes will be added and included: 6% sales tax. 1% transient room tax and 3% tourism tax.
        </div>
        <div className="finePrint">
          Booking will require a deposit with full payment due prior to arrival.
        </div>
        <div className="finePrint">
          No cancellation fee if cancelled greater than 14 days in advance, otherwise deposit will be forfeited.
        </div>
      </div>
    );
  }
}

export default Rooms;
