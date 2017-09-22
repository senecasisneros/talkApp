
const express = require('express');
const router = express.Router();

const Comment = require('../models/comment');

router.get('/', (req, res) => {
  Comment.find({}, (err, comments) => {
    if(err || !comments) {
      return res.status(400).send(err || "Comment not found");
    }
    res.send(comments)
  })
})

router.post('/', (req, res) => {
  Comment.create(req.body, (err, newComment) => {
    res.status(err ? 400 : 200).send(err || newComment);
  });
});

router.get('/:id', (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if(err || !comment) {
      return res.status(400).send(err || "Comment not found");
    }
    res.send(comment)
  })
})
router.put('/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, comment) => {
    if (err) {
      return res.status(400).send(err);
    }
    Comment.find({}, (err, comment) => {
      res.status(err ? 400 : 200).send(err || comment);
    });
  });
})
router.delete('/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id, (err, comments) => {
    res.status(err ? 400 : 200).send(err || comments);
  });
});

module.exports = router;
