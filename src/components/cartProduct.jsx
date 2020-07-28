import React, { Component } from "react";

class CartProduct extends Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{this.props.product.name} </h6>
          <small className="badge badge-primary">
            Qty:{this.props.product.value}
          </small>
        </div>
        <span className="text-muted">${this.props.product.amount}</span>
      </li>
    );
  }
}

export default CartProduct;
