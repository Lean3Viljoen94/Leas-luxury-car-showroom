import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import "./cars.css";

// fetch the API we want to use (backend)
export const fetchData = async () => {
  const api_call = await fetch(`http://localhost:8000/`);
  const response = await api_call.json();
  return response;
};

// setState to empty strings 
class NewCars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      currentlyEditing: {
        _id: "",
        make: "",
        model: "",
        regNr: "",
        currentOwner: ""
      }
    };
  }

  // Edit the car selected
  editCar = car => {
    this.setState({
      currentlyEditing: car
    });
  };

  // delete car using car id selected. Set new state.
  // If unable to delete for some reason, show error message.
  deleteCar = async carId => {
    try {
      await fetch(`http://localhost:8000/${carId}`, {
        method: "DELETE"
      });
      const index = this.state.cars.findIndex(car => car._id === carId);
      let tempcars = this.state.cars.slice(0, index);
      if (this.state.cars.length > index) {
        tempcars = tempcars.concat(
          this.state.cars.slice(index + 1, this.state.cars.length)
        );
      }
      this.setState({
        cars: tempcars
      });
    } catch (e) {
      console.log("Failed to delete!");
      console.error(e);
    }
  };

  // submitting a new car. First we add to server, then udpate local state to show on front end.
  submitcar = async e => {
    e.preventDefault();
    console.log(this.state.currentlyEditing);
    if (this.state.currentlyEditing._id === "") {
      // We're creating a new object
      try {
        // Create a new object on the server
        const response = await fetch("http://localhost:8000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state.currentlyEditing)
        });
        const newcar = await response.json();
        // Update local state to also include this object
        this.setState({
          currentlyEditing: {
            make: "",
            model: "",
            regNr: "",
            currentOwner: ""
          },
          cars: this.state.cars.concat([newcar])
        });
      } catch (e) {
        console.log("POST failed!");
        console.error(e);
      }
    } else {
      try {
        // We're editing an object. User can edit one input at a time, or multipe values. 
        await fetch(
          `http://localhost:8000/${this.state.currentlyEditing._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              make: this.state.currentlyEditing.make,
              model: this.state.currentlyEditing.model,
              regNr: this.state.currentlyEditing.regNr,
              currentOwner: this.state.currentlyEditing.currentOwner
            })
          }
        );
        // Update the local state to also include the change
        const index = this.state.cars.findIndex(
          car => car._id === this.state.currentlyEditing._id
        );
        const newcars = this.state.cars;
        newcars[index] = this.state.currentlyEditing;
        this.setState({
          currentlyEditing: {
            _id: "",
            make: "",
            model: "",
            regNr: "",
            currentOwner: ""
          },
          cars: newcars
        });
      } catch (e) {
        console.log("PUT failed!");
        console.error(e);
      }
    }
  };

  makeUpdate = e => {
    this.setState({
      currentlyEditing: Object.assign({}, this.state.currentlyEditing, {
        make: e.target.value
      })
    });
  };

  modelUpdate = e => {
    this.setState({
      currentlyEditing: Object.assign({}, this.state.currentlyEditing, {
        model: e.target.value
      })
    });
  };

  regNrUpdate = e => {
    this.setState({
      currentlyEditing: Object.assign({}, this.state.currentlyEditing, {
        regNr: e.target.value
      })
    });
  };
  currentOwnerUpdate = e => {
    this.setState({
      currentlyEditing: Object.assign({}, this.state.currentlyEditing, {
        currentOwner: e.target.value
      })
    });
  };

  componentDidMount() {
    fetchData().then(cars => {
      this.setState({
        cars: cars,
      });
    });
  }

  render() {
    return (
      <div className="mainDiv">
        <div>
          <form onSubmit={this.submitcar} className="heading1">
            <input
              type="text"
              name="make"
              placeholder="Enter make "
              value={this.state.currentlyEditing.make}
              onChange={this.makeUpdate}
              className="form"
            />
            <br />
            <input
              type="text"
              name="model"
              placeholder="Enter model (*required)"
              value={this.state.currentlyEditing.model}
              onChange={this.modelUpdate}
              className="form"
            />
            <br />
            <input
              type="text"
              name="regNr"
              placeholder="Enter Registration Nr "
              value={this.state.currentlyEditing.regNr}
              onChange={this.regNrUpdate}
              className="form"
            />
            <br />
            <input
              type="text"
              name="currentOwner"
              placeholder="Enter Current Owner "
              value={this.state.currentlyEditing.currentOwner}
              onChange={this.currentOwnerUpdate}
              className="form"
            />
            <br />
            <br />
            <input type="submit" value="Submit" className="submitBtn" variant="secondary" size="sm"/>
          </form>
        </div>
        <br />
        <h2>Cars available:</h2>
        <br />
        <br />
        <div>
          {this.state.cars.map(car => {
            // If showOnlyOldCars() is clicked (true) then we will map only the cars with model less than 2009. 
            // If showOnlyOldCars() is false (this can toggle) we will display all cars. 
            if (!this.props.showOnlyOldCars || (this.props.showOnlyOldCars && car.model < "2009")) {
              return (
                <div key={car._id}>
                  <Card>   
                  Make: {car.make}
                  <br />
                  Model: {car.model}
                  <br />
                  Registration Number: {car.regNr}
                  <br />
                  Current Owner: {car.currentOwner}
                  <br />
                  <Button
                    className="buttons"
                    variant="secondary"
                    size="sm"
                    onClick={() => this.editCar(car)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="buttons"
                    variant="secondary"
                    size="sm"
                    onClick={() => this.deleteCar(car._id)}
                  >
                    Delete
                  </Button>
                  </Card>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
export default NewCars;
