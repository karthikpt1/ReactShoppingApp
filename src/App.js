import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";

class App extends Component {
  state = {};

  state = {
    products: [
      { id: 1, name: "Prduct1", value: 0, price: 10, amount: 0 },
      { id: 2, name: "Prduct2", value: 0, price: 20, amount: 0 },
      { id: 3, name: "Prduct3", value: 0, price: 30, amount: 0 },
      { id: 4, name: "Prduct4", value: 0, price: 40, amount: 0 },
      { id: 5, name: "Prduct5", value: 0, price: 50, amount: 0 },
    ],
  };

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    products[index].amount = products[index].value * products[index].price;
    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value == 0
      ? (products[index].value = products[index].value)
      : products[index].value--;
    products[index].amount = products[index].value * products[index].price;
    this.setState({ products });
  };

  sumProperty = (arr, type) => {
    return arr.reduce((amount, obj) => {
      return amount + obj[type];
    }, 0);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalProducts={this.state.products.filter((c) => c.value > 0).length}
          totalAmount={this.state.products.reduce(
            (totalAmount, prod) => totalAmount + prod.amount,
            0
          )}
        />
        <main className="container">
          <Products
            products={this.state.products}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
