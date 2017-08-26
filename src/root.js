import React, { Component } from 'react';
import {
  browserHistory,
  hashHistory,
  Router,
  Route,
} from 'react-router';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import Home from './pages/home/';
import About from './pages/about/';
import Events from './pages/events/';
import Rooms from './pages/rooms/';
import RoomDetails from './pages/rooms/';
import Contact from './pages/contact/';
import Availability from './pages/availability/';
import Confirmation from './pages/confirmation/';
import Notification from '../src/components/Notification';

const config = {
  apiKey: 'AIzaSyATJD-f2-qA-iNRRA9JVRMNRtRXWSg7qYY',
  authDomain: 'barr-house-1488128697057.firebaseapp.com',
  databaseURL: 'https://barr-house-1488128697057.firebaseio.com',
  storageBucket: 'barr-house-1488128697057.appspot.com',
  messagingSenderId: '638585832769'
};

class Root extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
    const db = firebase.database().ref('bookedDates');
    db.once('value').then((values) => {
      console.log(values.val());
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Router history={hashHistory}>
            <Route
              path="/"
              component={App}
              // onEnter={browserHistory.push('home')}
              onChange={(prevState, nextState) => {
                if (nextState.location.action !== 'POP') {
                  window.scrollTo(0, 0);
                }
              }}
            >
              <Route path="home" component={Home} />
              <Route path="about" component={About} />
              <Route path="events" component={Events} />
              <Route path="rooms" component={Rooms} />
              <Route path="rooms/:roomTitle" component={RoomDetails} />
              <Route path="book" component={Contact} />
              <Route path="contact" component={Contact} />
              <Route path="book/:bookID" component={Availability} />
              <Route path="confirmation" component={Confirmation} />
            </Route>
          </Router>
          <Notification />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Root;
