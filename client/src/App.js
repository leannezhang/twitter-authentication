import React, { Component } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { AppRouter } from "./AppRouter";

class App extends Component {
  // state = {
  //   authenticated: false
  // };

  render() {
    // const { authenticated } = this.state;

    // return authenticated ? (
    //   <Profile />
    // ) : (
    //   <Login
    //     authenticated={this.state.authenticated}
    //     handleSetAuthentication={this._handleIsAuthenticated}
    //   />
    // );
    return <AppRouter />;
  }
}

export default App;
