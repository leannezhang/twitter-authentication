import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import signInButton from './sign-in-with-twitter-gray.png';
import { obtainRequestToken } from './api/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={signInButton} alt="signInButton" onClick={this._handleSignInClick}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  _handleSignInClick = () => {
    alert('sign in...');
    obtainRequestToken();
  }
}

export default App;
