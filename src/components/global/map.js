import React, { Component, ReactDOM } from 'react';

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
import Marker from '../../assets/marker.png';

import './map.css';

class Map extends Component {
  static defaultProps = {
     center: {lat: 38.208280, lng: -84.258005},
     zoom: 15
   };

  render() {
     return (
       <GoogleMapReact
         apiKey={'AIzaSyAqKrvbdqxPbWbs6ZNiS9w-d-9a2j9VIfE'}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
       >

           <img
             lat={38.208280}
             lng={-84.258005}
             ref="image"
             src={Marker}
             className="marker"
             alt="page"
           />
       </GoogleMapReact>
     );
  }
}


export default Map;
