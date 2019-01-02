import React, { Component } from "react";
import "./App.css";
import signInButton from "./sign-in-with-twitter-gray.png";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={signInButton}
            alt="signInButton"
            onClick={this._handleSignInClick}
          />
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

  // create a profile page
  // change this to be the login page
  _handleSignInClick = () => {
    // wrap this in a promise
    // when promise is fulfilled, get the path name from the window
    // if it's login/success -> route to our user profile page
    // else: login/failed -> route to our login page
    const authenticationWindow = window.open(
      "http://localhost:4000/auth/twitter"
    );
  };
}

export default App;
