import React, { Component } from "react";

import { Button } from "react-bootstrap";
import { PlusCircleIcon, MinusCircleIcon } from "./icons";

class Product extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img
            style={{
              maxHeight: "200px",

              minHeight: "200px",
            }}
            className=".img-fluid img-thumbnail"
            src={require("../images/products/" +
              this.props.product.image +
              ".jpg")}
            alt=""
          />
          <div className="card-body">
            <p className="card-text">
              <span className="text-muted">
                {this.props.product.name} - ${this.props.product.price}
              </span>
            </p>
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <Button
                className="btn btn-danger btn-sm mb-1"
                onClick={() => this.props.onDecrement(this.props.product)}
              >
                <MinusCircleIcon width={"20px"} />
              </Button>
              <span className={this.getBadgeClasses()}>
                {this.props.product.value}
              </span>
              <Button
                className="btn btn-primary btn-sm mr-2 mb-1"
                onClick={() => this.props.onIncrement(this.props.product)}
              >
                <PlusCircleIcon width={"20px"} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Product;
