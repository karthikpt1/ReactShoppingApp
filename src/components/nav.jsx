import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-md sticky-top navbar-dark bg-light">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Shop Online
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
