import React, { Component } from 'react';
import logo from './assets/nierika.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Splash from './components/Splash';
//import firebase from 'firebase';
console.log('holi desde app');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashEnded: false
    };
    console.log(this.state.splashEnded);
  }

  componentDidMount() {
    if (!this.state.splashEnded) {
      setTimeout(() => this.setState({ splashEnded: true }), 2000);
    }
  }
  render() {
    //conditional rendering:
    if (!this.state.splashEnded) {
      return <Splash />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Nierika Huirrarica" />
          <h1 className="App-title">Nierika</h1>
        </header>
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
