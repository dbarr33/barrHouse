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
      </div>
    );
  }
}

export default Book;
