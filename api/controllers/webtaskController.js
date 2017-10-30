'use strict';


var mongoose = require('mongoose'),
CarDetails = mongoose.model('CarDetails');

exports.list_all_cars = function(req, res, next) {
  CarDetails.find({}, '_id name', function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.add_car = function(req, res, next) {
  var new_car = new CarDetails(req.body);
  new_car.save(function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.get_car = function(req, res, next) {
  CarDetails.findById(req.params.carId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_car = function(req, res, next) {
  CarDetails.remove({
    _id: req.params.carId
  }, function(err, car) {
    if (err)
      res.send(err);
    res.json({ message: 'Car successfully deleted' });
  });
};
