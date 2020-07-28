import React, { Component } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Products from "./products";
import productData from "./../data/products.json";
import CartProducts from "./cartProducts";

class ShopOnline extends Component {
  state = {
    products: productData.products,
  };

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
    console.log(product);
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value === 0
      ? (products[index].value = products[index].value)
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

  componentDidMount() {
    console.log("component did mount");
    this.refreshCartFromLocalStorage();
  }

  searchProduct = (idkey, productArray) => {
    for (var i = 0; i < productArray.length; i++) {
      if (productArray[i].id === idkey) {
        return true;
      }
    }
  };

  refreshCartFromLocalStorage = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartItems"));
    let products = [...this.state.products];
    let updatedProducts = [];
    products.map((product) => {
      if (!this.searchProduct(product.id, cartProducts)) {
        updatedProducts.push(product);
      }
    });
    cartProducts.map((cartProduct) => {
      updatedProducts.push(cartProduct);
    });

    this.setState({ products: updatedProducts });
  };

  sumProperty = (arr, type) => {
    return arr.reduce((amount, obj) => {
      return amount + obj[type];
    }, 0);
  };
  render() {
    return (
      <div class="container">
        <Row>
          <Col col-8>
            <Products
              products={this.state.products}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          </Col>
          <Col col-3>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShopOnline;
