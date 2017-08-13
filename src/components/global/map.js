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
         apiKey={'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}
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
