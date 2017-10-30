'use strict';
module.exports = function(app) {
  var carDetails = require('../controllers/webtaskController');

  app.route('/cars')
    .get(carDetails.list_all_cars)
    .post(carDetails.add_car);

  app.route('/cars/:carId')
    .get(carDetails.get_car)
    .delete(carDetails.delete_car);
};
