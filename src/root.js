import React, { Component } from 'react';
import {
  browserHistory,
  hashHistory,
  Router,
  Route,
} from 'react-router'
import firebase from 'firebase'

import App from './App';
import Home from './containers/home/home';
import About from './containers/about/about';
import Events from './containers/events/events';
import Rooms from './containers/rooms/rooms';
import RoomDetails from './containers/rooms/roomDetails';
import Book from './containers/book/book';
import Contact from './containers/contact/contact';
import Availability from './containers/availability/availability';
import Confirmation from './containers/confirmation/confirmation';

const config = {
    apiKey: "AIzaSyATJD-f2-qA-iNRRA9JVRMNRtRXWSg7qYY",
    authDomain: "barr-house-1488128697057.firebaseapp.com",
    databaseURL: "https://barr-house-1488128697057.firebaseio.com",
    storageBucket: "barr-house-1488128697057.appspot.com",
    messagingSenderId: "638585832769"
  };

class Root extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
    const db = firebase.database().ref('bookedDates');
    db.once('value').then((values) => {
      console.log(values.val());
    })
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path="/"
          component={App}
          onEnter={browserHistory.push('/home')}
          onChange={(prevState, nextState) => {
            if (nextState.location.action !== "POP") {
              window.scrollTo(0, 0);
            }
          }}
        >
          <Route path="home" component={Home}/>
          <Route path="about" component={About}/>
          <Route path="events" component={Events}/>
          <Route path="rooms" component={Rooms}/>
          <Route path="rooms/:roomTitle" component={RoomDetails}/>
          <Route path="book" component={Book}/>
          <Route path="contact" component={Contact}/>
          <Route path="book/:bookID" component={Availability}/>
          <Route path="confirmation" component={Confirmation}/>
          <Route path="*" component={Home} />
        </Route>
      </Router>
    );
  }
}

export default Root;
