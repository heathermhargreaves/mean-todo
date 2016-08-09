'use strict';

var mongoose = require('mongoose');

// todo.name
// todo.completed


new todoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;
