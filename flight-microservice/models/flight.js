const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var flightSchema = new Schema({
  airlines: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  dest: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
});
const Flight=mongoose.model("Flight", flightSchema);
module.exports = Flight
