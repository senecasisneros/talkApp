const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {type: String, default: ""},
  comments: {type: String, default: ""},
  timestamp: {type: Date, default: Date.now}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
