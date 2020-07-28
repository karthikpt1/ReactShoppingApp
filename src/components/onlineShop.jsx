import React, { Component } from "react";
import Products from "./products";
import productData from "./../data/products.json";
import CartProducts from "./cartProducts";
import { CartIcon } from "./icons";

class OnlineShop extends Component {
  state = {
    products: productData.products,
  };

  componentDidMount() {
    this.refreshCartFromLocalStorage();
  }

  render() {
    return (
      <div className="container">
        <div className="py-3 text-center">
          <h2>Buy Online </h2>
        </div>
        <div className="row">
          <div className="col-md-8 order-md-1 mb-4">
            {this.props.match.params.id !== "all" ? (
              <Products
                products={this.state.products.filter(
                  (c) => c.category === this.props.match.params.id
                )}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              />
            ) : (
              <Products
                products={this.state.products}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              />
            )}
          </div>
          <div className="col-md-4 order-md-2">
            <h5 className="d-flex justify-content-between align-items-center mb-3">
              <CartIcon width={"40px"} />

              <span className="text-muted">Your Cart</span>
              {this.state.products.reduce(
                (totalAmount, prod) => totalAmount + prod.amount,
                0
              ) !== 0 ? (
                <button
                  className="btn btn-link "
                  type="submit"
                  onClick={this.resetCart}
                >
                  Reset
                </button>
              ) : (
                <p></p>
              )}
              <span className="badge badge-secondary badge-pill">
                {this.state.products.reduce(
                  (totalItems, prod) => totalItems + prod.value,
                  0
                )}
              </span>
            </h5>
            <CartProducts
              products={this.state.products.filter((c) => c.value > 0)}
              totalItems={this.state.products.reduce(
                (totalItems, prod) => totalItems + prod.value,
                0
              )}
              totalAmount={this.state.products.reduce(
                (totalAmount, prod) => totalAmount + prod.amount,
                0
              )}
            />
          </div>
        </div>
      </div>
    );
  }

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    products[index].amount = products[index].value * products[index].price;
    this.setState({ products }, () => {
      this.saveCartToLocalStorage();
    });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    let indexValue = products[index].value;
    indexValue === 0
      ? (products[index].value = indexValue)
      : products[index].value--;
    products[index].amount = products[index].value * products[index].price;
    this.setState({ products }, () => {
      this.saveCartToLocalStorage();
    });
  };

  saveCartToLocalStorage = () => {
    let cart = [...this.state.products];
    cart = cart.filter((c) => c.value >> 0);
    let cartString = JSON.stringify(cart);
    localStorage.setItem("cartItems", cartString);
  };

  searchProduct = (idkey, productArray) => {
    for (var i = 0; i < productArray.length; i++) {
      if (productArray[i].id === idkey) {
        return true;
      }
    }
  };

  resetCart = () => {
    const products = [...this.state.products];

    products.forEach((product) => {
      product.value = 0;
      product.amount = 0;
    });
    this.setState({ products }, () => {
      this.saveCartToLocalStorage();
    });
  };

  refreshCartFromLocalStorage = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartItems"));
    let products = [...this.state.products];
    let updatedProducts = [];
    products.forEach((product) => {
      if (!this.searchProduct(product.id, cartProducts)) {
        updatedProducts.push(product);
      }
    });
    cartProducts.forEach((cartProduct) => {
      updatedProducts.push(cartProduct);
    });

    this.setState({ products: updatedProducts });
  };

  sumProperty = (arr, type) => {
    return arr.reduce((amount, obj) => {
      return amount + obj[type];
    }, 0);
  };
}

export default OnlineShop;
