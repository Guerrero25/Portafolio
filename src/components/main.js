import React, { Component } from "react";
import Profile from "./profile";
import Projects from "./projects";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Profile />
        <Projects />
      </div>
    );
  }
}

export default Main;
