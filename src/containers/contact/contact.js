import React, { Component } from 'react';

// Components
import Map from '../../components/global/map';
import UserForm from '../../components/availability/userForm';

// Styles
import './contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contactsContainer">
          <div className="contactContainer">
            <div className="contactHeader">
              Phone
            </div>
            <div className="contactInfo">
              859-537-1990
            </div>
          </div>
          <div className="contactContainer">
            <div className="contactHeader">
              Address
            </div>
            <div className="contactInfo">
              1200 Cypress Street
              <br />
              Paris, KY 40361
          </div>
          </div>
          <div className="contactContainer">
            <div className="contactHeader">
              Email
            </div>
            <div className="contactInfo">
              TheBarrHouseInn@gmail.com
            </div>
          </div>
        </div>
        <UserForm />
        <div className="mapContainer">
          <Map />
        </div>
      </div>
    );
  }
}

export default Contact;
