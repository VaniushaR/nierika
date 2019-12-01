import React, { Component } from 'react';
import logo from './assets/nierika.jpg';
import Footer from './components/Footer';
import Login from './components/Login';
import Splash from './components/Splash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashEnded: false
    };
  }

  componentDidMount() {
    //setTimeOut for the wolf splash 2000mls
    if (!this.state.splashEnded) {
      setTimeout(() => this.setState({ splashEnded: true }), 2000);
    }
  }
  render() {
    //conditional rendering for Splash:
    if (!this.state.splashEnded) {
      return <Splash />;
    }

    return (
      //else bind the Login view and components
      <div className="main">
        <div className="App">
          <header className="App-header">
            <img
              src={logo}
              className="App-logo"
              alt="Nierika Huirrarica"
              href="https://vaniushar.github.io/nierika/"
            />
            <h1 className="App-title">Nierika</h1>
          </header>
          <Login />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
