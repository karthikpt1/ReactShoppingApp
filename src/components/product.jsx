import React, { Component } from "react";

import { Container, fluid, Row, Col, Button } from "react-bootstrap";

class Product extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.product.name}</h5>{" "}
        <p> Price - {this.props.product.price}</p>
        <Button
          onClick={() => this.props.onIncrement(this.props.product)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </Button>
        <span className={this.getBadgeClasses()}>
          {this.props.product.value}
        </span>
        <Button
          onClick={() => this.props.onDecrement(this.props.product)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </Button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Product;
