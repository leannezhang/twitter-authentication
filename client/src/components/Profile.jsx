import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Profile extends Component {
  // static propTypes = {
  //   user: PropTypes.object
  // };

  state = {
    user: {}
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://localhost:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ user: responseJson.user });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <header>User profile</header>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>ScreenName</th>
              <th>Profile Picture</th>
            </tr>
            <tr>
              <td>{this.state.user.name}</td>
              <td>{`@${this.state.user.screenName}`}</td>
              <td>
                <img src={this.state.user.profileImageUrl} alt="profileImage" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
