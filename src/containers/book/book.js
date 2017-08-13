import React, { Component } from 'react';

import BookOption from "../../components/book/bookOption";
import Room1 from '../../assets/room-1.jpg';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import Pool from '../../assets/pool.jpg';
import "./book.css";

class Book extends Component {
  render() {
    return (
      <div className="bookContainer">
        <HeaderImage image={Pool} />
        <SectionHeaders value={'Book'} />
        <BookOption
          image={Room1}
          path={"/book/singleBed"}
          title="Single Room"
          sleeps={"One Bed"}
          cost={100}
        />
        <BookOption
          image={Room1}
          path={"/book/frontApartment"}
          title="Front Apartment"
          sleeps={"Two Beds"}
          cost={250}
        />
        <BookOption
          image={Room1}
          path={"/book/backApartment"}
          sleeps={"One Beds"}
          cost={250}
        />
        <BookOption
          image={Room1}
          cost={350}
          path={"/book/wholeHouse"}
          sleeps={"Three Beds"}
          title="Whole House"
        />
      </div>
    );
  }
}

export default Book;
