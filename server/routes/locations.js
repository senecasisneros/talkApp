
const express = require('express');
const router = express.Router();

const Location = require('../models/location');

router.get('/', (req, res) => {
  Location.find({}, (err, locations) => {
    if(err || !locations) {
      return res.status(400).send(err || "Location not found");
    }
    res.send(locations)
  })
})

router.post('/', (req, res) => {
  Location.create(req.body, (err, newLocation) => {
    res.status(err ? 400 : 200).send(err || newLocation);
  });
});

router.get('/:id', (req, res) => {
  Location.findById(req.params.id, (err, location) => {
    if(err || !location) {
      return res.status(400).send(err || "Location not found");
    }
    res.send(location)
  })
})
router.put('/:id', (req, res) => {
  Location.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, location) => {
    if (err) {
      return res.status(400).send(err);
    }
    Location.find({}, (err, location) => {
      res.status(err ? 400 : 200).send(err || location);
    });
  });
})
router.delete('/:id', (req, res) => {
  Location.findByIdAndRemove(req.params.id, (err, locations) => {
    res.status(err ? 400 : 200).send(err || locations);
  });
});

module.exports = router;
