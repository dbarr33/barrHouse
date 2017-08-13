import React, { Component } from 'react';

import HorseFields from '../../assets/horse-fields.jpg';
import BarrHouse from '../../assets/barr-house.jpg';
import HeaderImage from '../../components/images/headerImage';
import SectionHeaders from '../../components/sections/sectionHeaders';

import "./about.css";
const aboutFillerOne ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quis libero at sagittis. Pellentesque orci nibh, ornare id arcu at, scelerisque rhoncus ligula. Donec posuere mattis leo, non porta erat fermentum at. Duis egestas vulputate sollicitudin. Fusce lacinia tincidunt purus, vel pellentesque nunc malesuada at. Proin venenatis et elit ac fringilla. Nulla facilisi. Maecenas ac ipsum congue, finibus tellus at, gravida nulla. Suspendisse blandit, nisi a bibendum pharetra, urna urna imperdiet orci, nec laoreet nisi mi in magna. Fusce vitae nibh sed neque tempor ornare. Nulla id elit eu ligula efficitur interdum. Etiam sagittis tortor id viverra scelerisque."
const aboutFillerTwo ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quis libero at sagittis. Pellentesque orci nibh, ornare id arcu at, scelerisque rhoncus ligula. Donec posuere mattis leo, non porta erat fermentum at. Duis egestas vulputate sollicitudin. Fusce lacinia tincidunt purus, vel pellentesque nunc malesuada at. Proin venenatis et elit ac fringilla. Nulla facilisi. Maecenas ac ipsum congue, finibus tellus at, gravida nulla. Suspendisse blandit, nisi a bibendum pharetra, urna urna imperdiet orci, nec laoreet nisi mi in magna. Fusce vitae nibh sed neque tempor ornare. Nulla id elit eu ligula efficitur interdum. Etiam sagittis tortor id viverra scelerisque."

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <HeaderImage image={HorseFields} />
        <SectionHeaders value={'About'} />
        <div className="aboutContent">
          <div className="aboutText">
            {aboutFillerOne}
            <br/>
            <br/>
            <br/>
            {aboutFillerTwo}
          </div>
          <img
            alt="first"
            src={HorseFields}
            className="aboutImage"
          />
        </div>
        <div className="aboutContent">
          <div className="aboutText">
            {aboutFillerOne}
            <br/>
            <br/>
            <br/>
            {aboutFillerTwo}
          </div>
          <img
            alt="second"
            src={BarrHouse}
            className="aboutImage"
          />
        </div>
      </div>
    );
  }
}

export default About;
