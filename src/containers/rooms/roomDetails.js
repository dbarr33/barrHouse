import React, { Component } from 'react';
import Room1 from '../../assets/room-1.jpg';
import Amenitites from '../../components/global/amenitites';

import './roomDetails.css';
const descriptionFiller ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quis libero at sagittis. Pellentesque orci nibh, ornare id arcu at, scelerisque rhoncus ligula. Donec posuere mattis leo, non porta erat fermentum at. Duis egestas vulputate sollicitudin. Fusce lacinia tincidunt purus, vel pellentesque nunc malesuada at. Proin venenatis et elit ac fringilla. Nulla facilisi. Maecenas ac ipsum congue, finibus tellus at, gravida nulla. Suspendisse blandit, nisi a bibendum pharetra, urna urna imperdiet orci, nec laoreet nisi mi in magna. Fusce vitae nibh sed neque tempor ornare. Nulla id elit eu ligula efficitur interdum. Etiam sagittis tortor id viverra scelerisque."

class RoomDetails extends Component {
  getImage() {
    if (this.props.params.roomTitle) {
      return Room1;
    }
  }

  render() {
    return (
      <div className="roomDetailsContainer">
        <div className="roomTitle">{this.props.params.roomTitle}</div>
        <div className="roomDetailsImageContainer">
          <img
            alt="roomDetail"
            src={this.getImage()}
            className="roomDetailImage"
          />
        </div>
        <div>{descriptionFiller}</div>
        <Amenitites/>
      </div>
    );
  }
}

export default RoomDetails;
