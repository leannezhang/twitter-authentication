import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

class App extends Component {
  state = {
    authenticated: false
  };

  render() {
    const { authenticated } = this.state;

    return authenticated ? (
      <Profile />
    ) : (
      <Login
        authenticated={this.state.authenticated}
        handleSetAuthentication={this._handleIsAuthenticated}
      />
    );
  }

  _handleIsAuthenticated = isSuccessfullyAuthenticated => {
    this.setState({
      authenticated: isSuccessfullyAuthenticated
    });
  };
}

export default App;
