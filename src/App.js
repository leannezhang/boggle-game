import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          {/* TODO: Add Boggle Image */}
          <img src={logo} className="header-logo" alt="logo" />
        </div>
        {/* TODO: Render Game component */}
        <Game />
      </div>
    );
  }
}

export default App;
