import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.props.products.map((product) => (
              <Product
                key={product.id}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
