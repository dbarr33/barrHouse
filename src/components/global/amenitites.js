import React, { Component } from 'react';

import './amenitites.css';

class Amenitites extends Component {

  renderAmenities() {
    const amenitites = [];
    for (let i = 0; i  < 5; i++) {
      amenitites.push(
        <div className="amenitityRowContainer">
          <div className="bulletPoint"/>
          <div className="amenitity">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      )
    }
    return amenitites;
  }
  render() {
    return (
      <div className="amenititesContainer">
        <div className="amenititesTitle">Amenitites</div>
        {this.renderAmenities()}
      </div>
    );
  }
}

export default Amenitites;
