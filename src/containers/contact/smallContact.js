import React, { Component } from 'react';

import './contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="smallContactsContainer">
        <div>
           Phone: 859-533-6876
        </div>
        <div>
          Address: 1200 Cypress Street   Paris, KY 40361
        </div>
        <div>
          Email: contact@barhouse.com
        </div>
      </div>
    );
  }
}

export default Contact;
