import React, { Component } from 'react';
import Helmet from 'react-helmet'

import NavigationBar from './components/global/navigationBar';
import Footer from './components/global/footer';
import Home from './pages/home/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          title="Barr House"
        />
        <NavigationBar />
        { this.props.children || <Home /> }
        <Footer />
      </div>
    );
  }
}

export default App;
