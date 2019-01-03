import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const user = {
      _id: "5c2c27dce04b501c0e493914",
      name: "Leanne",
      screenName: "Liyangz",
      twitterId: "182647135",
      profileImageUrl:
        "http://pbs.twimg.com/profile_images/1024824614382272512/fSDOBLoW_normal.jpg"
    };
    return (
      <div>
        <header>User profile</header>
        <table>
          <tr>
            <th>Name</th>
            <th>ScreenName</th>
            <th>Profile Picture</th>
          </tr>
          <tr>
            <td>{user.name}</td>
            <td>{`@${user.screenName}`}</td>
            <td>
              <img src={user.profileImageUrl} alt="profileImage" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
