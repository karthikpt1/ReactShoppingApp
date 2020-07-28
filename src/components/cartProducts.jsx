import React, { Component } from "react";
import CartProduct from "./cartProduct";

import history from "./history";

class CartProducts extends Component {
  render() {
    return (
      <div>
        <ul className="list-group mb-3">
          {this.props.products.length !== 0 ? (
            <div>
              <ul className="list-group">
                {this.props.products.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${this.props.totalAmount}</strong>
                </li>
              </ul>
              <hr className="mb-4"></hr>
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                onClick={() => history.push("/checkOut")}
              >
                Continue to checkout
              </button>
            </div>
          ) : (
            <h6 className="text-center">
              Start shopping to fill it with delicious Chocolates and Nuts
            </h6>
          )}
        </ul>
      </div>
    );
  }
}

export default CartProducts;
