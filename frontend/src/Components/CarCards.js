import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";

import carSampleData from "../SampleData.json";
import placeholderImg from "../Images/placeholder.jpg";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";

import Filters from "./Filters";

function showMore() {
  const show = false;
  const setShow = () => {};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

class CarCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearMin: 0,
      yearMax: Infinity,
      priceMin: 0,
      priceMax: Infinity,
      mileMin: 0,
      mileMax: Infinity
    };
  }

  setYearRange = (min, max) => {
    this.setState({
      yearMin: min,
      yearMax: max
    });
  };

  setPriceRange = (min, max) => {
    this.setState({
      priceMin: min,
      priceMax: max
    });
  };

  setMileageRange = (min, max) => {
    this.setState({
      mileMin: min,
      mileMax: max
    });
  };

  render() {
    var carData = carSampleData;

    const filteredCars = carData.filter(car => {
      const formattedPriceString = car.sellingPrice
        .replace("R", "")
        .replace(",", ".")
        .split(" ")
        .join("");
      const carPrice = parseFloat(formattedPriceString);
      return (
        carPrice > this.state.priceMin &&
        carPrice < this.state.priceMax &&
        car.year > this.state.yearMin &&
        car.year < this.state.yearMax &&
        car.mileage > this.state.mileMin &&
        car.mileage < this.state.mileMax
      );
    });
    const listCars = filteredCars.map((car, i) => (
      <div>
        <CardGroup>
          <Card key={car.imageUrl}>
            <Card.Title className="vehicleName">{car.vehicle}</Card.Title>
            <div className="imgTextDiv">
              <div className="imgDiv">
                <ReactImageFallback
                  src={car.imageUrl}
                  fallbackImage={placeholderImg}
                  alt="imageUrl"
                  className="carImg"
                />
              </div>
              <div className="contentDiv">
                <Card.Body>
                  <Card.Text className="vehicleName">
                    <ListGroup horizontal>
                      <ListGroup.Item>YEAR: {car.year}</ListGroup.Item>
                      <ListGroup.Item>MILEAGE: {car.mileage} km</ListGroup.Item>
                      <ListGroup.Item>PRICE: {car.sellingPrice}</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <br/>
                    <p>{car.description}</p>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <Card.Footer>
              <Button onClick={showMore}>See more</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
        <br />
        <br />
      </div>
    ));
    return (
      <div>
        <br />
        <Filters
          setYearRange={this.setYearRange}
          setPriceRange={this.setPriceRange}
          setMileageRange={this.setMileageRange}
        />
        <Container>
          <Row>{listCars}</Row>
        </Container>
      </div>
    );
  }
}

export default CarCards;
