import React, { Component } from "react";
import NavBar from "./components/navbar";

import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
