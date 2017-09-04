import React, { Component } from 'react';

import { Link } from 'react-router';

import './NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navigationBar">
          <div className="titleContainer">
            <Link className="title" to="/home">Barr House</Link>
          </div>
          <div className="navList">
            <div className="navItem">
              <Link to="/book">Book</Link>
            </div>
            <div className="navItem">
              <Link to="/events">Events</Link>
            </div>
            {/* <div className="navItem">
              <Link to="/about">About</Link>
            </div> */}
            <div className="navItem">
              <Link to="/rooms">Rooms</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
