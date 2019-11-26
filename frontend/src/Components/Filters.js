import React, { Component } from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Filters extends Component {
  render() {
    return (
      <div>
        <h2> Filter By: </h2>
        <div class="filterDiv">
          <DropdownButton id="dropdown-basic-button" title="Year">
            <Dropdown.Item href="#/action-3">Older than 2016</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Older than 2018</Dropdown.Item>
            <Dropdown.Item href="#/action-3">2019 + </Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Price">
            <Dropdown.Item href="#/action-1">Less than R150 000</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Less than R200 000</Dropdown.Item>
            <Dropdown.Item href="#/action-3">More than R200 000</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="Mileage">
            <Dropdown.Item href="#/action-1">
              Less than 100 000 km{" "}
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Less than 150 000 km
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              More than 150 000 km
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Filters;
