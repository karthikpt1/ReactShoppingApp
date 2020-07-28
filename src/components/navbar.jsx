import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          {" "}
          <span className="badge.badge-pill.badge-secondary">
            Total Products - {this.props.totalProducts}
          </span>
          {"    "}
          <span className="badge.badge-pill.badge-secondary">
            Total Amount - {this.props.totalAmount}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
