const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {type: String, default: ""},
  zipCodes: {type: Array, default: []},
  timestamp: {type: Date, default: Date.now}
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
