'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarDetailsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sale_details: {
      min_price: Number,
      max_price: Number,
      item_number: String,
      vin: String,
  },
  publication_stats: {
      views: Number,
      shares: Number,
      saves: Number
  },
  car_details: {
    general: {
          year: String,
          mileage: String,
    },
    exterior: {
        color: String,
        doors: Number,
        chassis: String,
        painting: String,
    },
    performance: {
        cylinders: String,
        city_mpg: Number,
        highway_mpg: Number,
        engine: String,
    },
  },
  pictures: [String],
});

module.exports = mongoose.model('CarDetails', CarDetailsSchema);
