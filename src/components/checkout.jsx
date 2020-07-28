import React, { Component } from "react";
import CartProduct from "./cartProduct";
import { CartIcon } from "./icons";
import history from "./history";

class checkout extends Component {
  state = {
    CartProducts: [],
  };

  componentDidMount() {
    this.refreshCartFromLocalStorage();
  }

  refreshCartFromLocalStorage = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartItems"));
    this.setState({ CartProducts: cartProducts });
  };

  handleSubmit = (event) => {
    alert("Order is submitted successfully! your refernce number is BER123");
    let cart = [];
    let cartString = JSON.stringify(cart);
    localStorage.setItem("cartItems", cartString);
    history.push("/onlineShop/all");
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="py-3 text-center">
          <h2>Checkout</h2>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h5 className="d-flex justify-content-between align-items-center mb-3">
              <CartIcon width={"40px"} />
              <span className="text-muted">Your Cart</span>
              <span className="badge badge-secondary badge-pill">
                {this.state.CartProducts.length}
              </span>
            </h5>
            <ul className="list-group mb-3">
              {this.state.CartProducts.length !== 0 ? (
                <div>
                  <ul className="list-group">
                    {this.state.CartProducts.map((product) => (
                      <CartProduct key={product.id} product={product} />
                    ))}

                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>
                        $
                        {this.state.CartProducts.reduce(
                          (totalAmount, prod) => totalAmount + prod.amount,
                          0
                        )}
                      </strong>
                    </li>

                    <hr className="mb-4"></hr>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      onClick={() => history.push("/onlineShop/all")}
                    >
                      Continue Shopping
                    </button>
                  </ul>
                </div>
              ) : (
                <h6 className="text-center">
                  Start shopping to fill it with delicious Chocolates and Nuts
                </h6>
              )}
            </ul>
          </div>

          {this.state.CartProducts.length !== 0 ? (
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="email">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  ></input>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  ></input>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address2">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  ></input>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>India</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>TamilNadu</option>
                      <option>Karnataka</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                    ></input>
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="mb-4"></hr>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  ></input>
                  <label className="custom-control-label" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <hr className="mb-4"></hr>

                <h4 className="mb-3">Payment</h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      defaultChecked
                      required
                    ></input>
                    <label className="custom-control-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    ></input>
                    <label className="custom-control-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    ></input>
                    <label className="custom-control-label" for="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    ></input>
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4"></hr>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          ) : (
            <div className="col-md-8 order-md-1">
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                onClick={() => history.push("/onlineShop/all")}
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default checkout;
