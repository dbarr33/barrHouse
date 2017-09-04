import React, { Component } from 'react';

import { Link } from 'react-router';
import SmallContact from '../../pages/contact/smallContact';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <SmallContact />
        <div className="footerList">
          <div className="footerItem">
            <Link to="/home">Home</Link>
          </div>
          <div className="divider" />
          <div className="footerItem">
            <Link to="/book">Book</Link>
          </div>
          <div className="divider" />
          <div className="footerItem">
            <Link to="/events">Events</Link>
          </div>
          <div className="divider" />
          {/* <div className="footerItem">
            <Link to="/about">About</Link>
          </div> */}
          <div className="divider" />
          <div className="footerItem">
            <Link to="/rooms">Rooms</Link>
          </div>
          <div className="divider" />
          <div className="footerItem">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
