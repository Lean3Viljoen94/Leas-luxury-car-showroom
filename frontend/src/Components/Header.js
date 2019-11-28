import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class NavLink extends Component {
  render() {
    var { className, activeClassName, to, exact, ...rest } = this.props;
    return <Link className={className} to={to} {...rest} />
  }
}

class CarHeader extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Lea's Luxury Cars</Navbar.Brand>
          <Nav className="mr-auto">
            <div className="navbar">
              <NavLink to="/" className="navlink" >
                Showroom
              </NavLink>
              <NavLink
                to="/addcar"
                className="navlink"
              >
                Add A Car
              </NavLink>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default CarHeader;
