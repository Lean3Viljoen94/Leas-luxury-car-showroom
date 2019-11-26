const car = require('../models/car.models.js');
const mongoose = require('mongoose');

exports.create = function(req, res) {
    // Create and Save a new car using the input from the frontend
    let carModel = new car({
        model: req.body.model,
        make: req.body.make,
        regNr: req.body.regNr,
        currentOwner:req.body.currentOwner
    });
    carModel.save(function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the car." });
        } else {
            console.log(data);
            res.send(data);
        }
    });
};

// Adds all the cars from the database to a list on the UI. 
exports.findAll = function(req, res) {
    console.log('showing all cars');
    car.find(function(err, cars) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving cars." });
        } else {
            res.send(cars);
        }
    });
}
// Update specific car data. User can update any data as long as model is present.
exports.updateByOwner = function(req, res) {
    let query = { currentOwner: req.body.currentOwner };
    car.findOneAndUpdate(query, { currentOwner: req.body.currentOwner }, { new: true }, function(err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send("ERROR: Not Updated. " + err);
        }
        res.send(doc);
    });
}

// use unique ID to delete a specific car selected
exports.deletecarsById = function(req, res) {
    car.findOneAndRemove({ currentOwner: 'Hyperion' }, function(err) {
        if (err) {
            console.log("ERROR: cars NOT removed. " + err);
            res.send("ERROR: cars NOT removed. " + err);
        }
        res.send("cars removed");
    });
}