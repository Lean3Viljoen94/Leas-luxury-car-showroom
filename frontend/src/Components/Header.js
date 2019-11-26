import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



class CarHeader extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Lea's Luxury Cars</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="#home">Showroom</Nav.Link>
            <Nav.Link className="nav-link" href="#about">Add a Car</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default CarHeader;

