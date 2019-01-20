import React, { Component } from "react";

import coverbg from "../img/cover-bg.jpeg";
import profile from "../img/profile.jpg";

class Head extends Component {
  render() {
    return (
      <div
        style={{ backgroundImage: "url(" + coverbg + ")" }}
        className="info-profile-card profile-cover cover-filter"
      >
        <figure className="profile-avatar">
          <img src={profile} alt="profile-avatar" />
        </figure>
        <span className="name">Omar Guerrero</span>
        <span className="location">Cartagena de Indias, Colombia</span>
      </div>
    );
  }
}

export default Head;
