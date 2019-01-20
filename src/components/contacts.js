import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="info-profile-card">
        <h3>Contacts:</h3>
        <div className="contact-item">
          <i className="fa fa-envelope-o" />
          <span>guerrero9725@gmail.com</span>
        </div>
        <div className="contact-item">
          <i className="fa fa-twitter" aria-hidden="true" />
          <span>
            <a
              href="https://twitter.com/oguerrero725"
              target="_blank"
              rel="noopener noreferrer"
            >
              @OGuerrero725
            </a>
          </span>
        </div>
        <div className="contact-item">
          <i className="fa fa-github" aria-hidden="true" />
          <span>
            <a
              href="https://github.com/Guerrero25"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Guerrero25
            </a>
          </span>
        </div>
        <div className="contact-item">
          <i className="fa fa-rss" aria-hidden="true" />
          <span>
            <a
              href="https://devguerrero.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              devguerrero.me
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Contacts;
