import React from "react";

import carSampleData from "../SampleData.json";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import Filters from "./Filters";

function CarCards() {
  var carData = carSampleData;
  const listCars = carData.map((car, i) => (
    <div>
      <CardGroup>
        <Card key={car.imageURL}>
          <Card.Title className="vehicleName">{car.vehicle}</Card.Title>
          <div className="imgTextDiv">
            <div class="imgDiv">
              <Card.Img
                variant="top"
                src={car.imageUrl}
                alt="Oops, this image is not available. "
                class="carImg"
              />
            </div>
            <div class="contentDiv">
              <Card.Body>
                <Card.Text className="vehicleName">
                  <ListGroup horizontal>
                    <ListGroup.Item>YEAR: {car.year}</ListGroup.Item>
                    <ListGroup.Item>MILEAGE: {car.mileage} km</ListGroup.Item>
                    <ListGroup.Item>PRICE: {car.sellingPrice}</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
          <Card.Footer>
            <Button>See more</Button>
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
      <Filters />
      <Container>
        <Row>{listCars}</Row>
      </Container>
    </div>
  );
}

export default CarCards;
