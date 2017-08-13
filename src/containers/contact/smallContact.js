import React, { Component } from 'react';

import './contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="smallContactsContainer">
        <div>
           Phone: 859-537-1990
        </div>
        <div>
          Address: 1200 Cypress Street   Paris, KY 40361
        </div>
        <div>
          Email: theBarrHouseInn@gmail.com
        </div>
      </div>
    );
  }
}

export default Contact;
