import React, { Component } from "react";

class CompleteOrder extends Component {
  state = {};

  componentDidMount() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        {" "}
        <h5 align="center">Thank you for submitting your order</h5>
        <p align="center">
          Your order reference number is BE123KHS.{" "}
          <a href="./Home"> Continue shopping</a>
        </p>
      </div>
    );
  }
}

export default CompleteOrder;
