import React, { Component } from 'react';

import { Route } from "react-router-dom";

import CarCards from "./CarCards";
import AddCar from "./AddCar";
 
class Content extends Component {
    render() {
        return (
            <div>
                <Route exact={true} path="/" component={CarCards} />
                <Route path="/addcar" component={AddCar} />
            </div>
        );
    }
};

export default Content;