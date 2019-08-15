//Splash view components
import React, { Component } from 'react';
import Brand from '../assets/logoWolf.gif';

class Splash extends Component {
  render() {
    return (
      <div className="intro">
        <img src={Brand} className="wolf" alt="WolfLogo made by" />
        <h1 className="Brand">Vaniusha Co.</h1>
      </div>
    );
  }
}

export default Splash;
