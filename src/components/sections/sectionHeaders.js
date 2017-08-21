import React, { Component } from 'react';


import "./sectionHeaders.css";
const description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur quis libero at sagittis. Pellentesque orci nibh, ornare id arcu at, scelerisque rhoncus ligula. Donec posuere mattis leo, non porta erat fermentum at. Duis egestas vulputate sollicitudin. Fusce lacinia tincidunt purus, vel pellentesque nunc malesuada at. Proin venenatis et elit ac fringilla. Nulla facilisi. Maecenas ac ipsum congue, finibus tellus at, gravida nulla. Suspendisse blandit, nisi a bibendum pharetra, urna urna imperdiet orci, nec laoreet nisi mi in magna. Fusce vitae nibh sed neque tempor ornare. Nulla id elit eu ligula efficitur interdum. Etiam sagittis tortor id viverra scelerisque."

class Home extends Component {
  render() {
    return (
      <div className="sectionContainer">
        <div className="sectionDivider" />
        <text className="sectionText">{this.props.value}</text>
        <div className="sectionDivider" />
        <text className="sectionDescription">{this.props.text || description}</text>
      </div>
    );
  }
}

export default Home;
