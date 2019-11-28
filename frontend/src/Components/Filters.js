import React, { Component } from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Filters extends Component {

  render() {
    return (
      <div>
        <h1 className="welcomeShowroom">Welcome to the Showroom</h1>
        <h2 className="filterBy"> Filter By: </h2>
        <div className="filterDiv">
          <DropdownButton id="dropdown-basic-button" title="Year">
          <Dropdown.Item onClick={() => this.props.setYearRange(0, Infinity)}>Clear</Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setYearRange(0, 2016)}>Older than 2016</Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setYearRange(0, 2018)}>Older than 2018</Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setYearRange(2018, Infinity)}>Younger Than 2018 </Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Price">
            <Dropdown.Item onClick={() => this.props.setPriceRange(0, 150000)}>Less than R150 000</Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setPriceRange(0, 200000)}>Less than R200 000</Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setPriceRange(200000, Infinity)}>More than R200 000</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Mileage">
            <Dropdown.Item onClick={() => this.props.setMileageRange(0, 100000)}>Less than 100 000 km</Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setMileageRange(0, 150000)}>Less than 150 000 km</Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.setMileageRange(150000, Infinity)}>More than 150 000 km</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Filters;
