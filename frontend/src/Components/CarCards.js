import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";

import carSampleData from "../SampleData.json";
import placeholderImg from "../Images/placeholder.jpg";
import Filters from "./Filters";
import "../modal.css";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

// modal receives props from CarCards component. 
class Modal extends React.Component {
  render() {
    return (
      <div id="dimmer">
        <div id="modal">
          <h5>{this.props.car.vehicle}</h5>
          <ReactImageFallback
                  src={this.props.car.imageUrl}
                  fallbackImage={placeholderImg}
                  alt="imageUrl"
                  className="carImg"
                />
          <p>Color: {this.props.car.color}</p>
          <p>Year: {this.props.car.year}</p>
          <p>Mileage: {this.props.car.mileage}</p>
          <p>Description: {this.props.car.description}</p>
          <p>Price: {this.props.car.sellingPrice}</p>
          <br/>
          <Button className="close" onClick={this.props.onClose()}>Close</Button>
        </div>
      </div>
    )
  }
}

// State on filters for min & max to pass on as props to Filters component. 
// Modal state passed as props to modal

class CarCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carToShowInModal:0,
      modalOpen: false,
      yearMin: 0,
      yearMax: Infinity,
      priceMin: 0,
      priceMax: Infinity,
      mileMin: 0,
      mileMax: Infinity
    };
    this.showCarInModal = this.showCarInModal.bind(this);
    this.hideCarModal = this.hideCarModal.bind(this);

    }
  showCarInModal(car) {
    this.setState({modalOpen : true,
    carToShowInModal: car});
  }

  hideCarModal(){
    this.setState({modalOpen : false});
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

  render(){
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
            <Button onClick={() => this.showCarInModal(car)}>See more</Button>
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
        {this.state.modalOpen ? <Modal car={this.state.carToShowInModal} onClose={() => this.hideCarModal}/> : null}
          <Container>
          <Row>{listCars}</Row>
        </Container>
      </div>
    );
  }
}

export default CarCards;
