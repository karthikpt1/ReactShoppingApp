import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default Products;
