import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2020-2021 Bertha's Chocolate Company</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <h6>Privacy</h6>
          </li>
          <li className="list-inline-item">
            <h6>Terms</h6>
          </li>
          <li className="list-inline-item">
            <h6>Support</h6>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
