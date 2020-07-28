import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="blog-header mb-4 mt-4 py-6">
        <div className="col text-center">
          <h3>Bertha's Deluxe Chocolates Factory</h3>
        </div>
      </header>
    );
  }
}

export default Header;
