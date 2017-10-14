const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {type: String, default: ""},
  zipCodes: {type: Number },
  timestamp: {type: Date, default: Date.now}
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
