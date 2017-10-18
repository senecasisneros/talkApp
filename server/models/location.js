const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {type: String, default: ""},
  zipCode: {type: Number, deafault: [] },
  timestamp: {type: Date, default: Date.now}
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
