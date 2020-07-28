import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import OnlineShop from "./onlineShop";
import Checkout from "./checkout";
import Home from "./home";
import history from "./history";
import Error from "./error";

import { Switch, Route, Link } from "react-router-dom";

import { Router } from "react-router";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <Router history={history}>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="#home">Bertha's Chocolate Factory</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                {" "}
                <Link to="/Home">Home</Link>
              </Nav.Link>

              <NavDropdown title="Shop Online" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  {" "}
                  <Link to="/onlineShop/all">All Categories</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  {" "}
                  <Link to="/onlineShop/milk">Milk Chocolates</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/onlineShop/dark">Dark Chocolates</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  {" "}
                  <Link to="/onlineShop/nuts">Premium Nuts</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Welcome: Guest</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route
            path="/onlineShop/:id"
            render={({ match }) => <OnlineShop match={match} />}
          />
          <Route path="/checkOut" component={Checkout} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
