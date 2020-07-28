import React, { Component } from "react";
import history from "./history";

class home extends Component {
  state = {};

  render() {
    return (
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Welcome to Bertha's Chocolate Factory</h1>
            <p className="lead text-muted">
              Since 2019, Bertha's Chocolate Factory offers a collection of high
              quality Chocolates and Premium Nuts that are appealing to
              customers worldwide.
            </p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    style={{
                      maxHeight: "250px",
                      minHeight: "250px",
                    }}
                    className=".img-fluid img-thumbnail"
                    src={require("../images/darkChoc.jpg")}
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Deliciously hand made Dark Chocolates
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => history.push("/onlineShop/dark")}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    style={{
                      maxHeight: "250px",
                      minHeight: "250px",
                    }}
                    className=".img-fluid img-thumbnail"
                    src={require("../images/milkChoc.jpg")}
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Deliciously hand made Milk Chocolates
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => history.push("/onlineShop/milk")}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    style={{
                      maxHeight: "250px",
                      minHeight: "250px",
                    }}
                    className=".img-fluid img-thumbnail"
                    src={require("../images/nuts.jpg")}
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">Fresh Premium Nuts</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => history.push("/onlineShop/nuts")}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default home;
