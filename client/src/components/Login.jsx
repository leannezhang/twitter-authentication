import React, { Component } from "react";
import loginInButton from "../images/sign-in-with-twitter-gray.png";
import "./Login.css";
export default class Login extends Component {
  state = {
    authenticated: false
  };

  render() {
    return (
      <div className="loginContainer">
        <img
          src={loginInButton}
          alt="loginInButton"
          onClick={this._handleSignInClick}
        />
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
      "http://localhost:4000/auth/twitter",
      "_self",
      "height=500,width=400"
    );

    const timer = setInterval(() => {
      if (authenticationWindow.closed) {
        clearInterval(timer);
      }
    }, 1000);

    // const authenticatedPromise = new Promise((resolve, reject) => {
    //   const timer = setInterval(() => {
    //     if (authenticationWindow.closed) {
    //       clearInterval(timer);
    //       resolve();
    //     }
    //   }, 1000);
    // });

    // // win.location.href.indexOf("/login/index.php") < 0;

    // authenticatedPromise.then(() => {
    //   this.setState({
    //     authenticated: this.state.authenticated
    //   });
    // });
  };
}
