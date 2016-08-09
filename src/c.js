'use strict';

var Todo = require('./mdoels/todo.js');

var todos = [
  'Feed the dog',
  'Walk the kids',
  'Water trees'
];

todos.forEach(function(todo, index) {
  Todo.find({'name': todo}, function(err, todos) {
    if(!err && !todos.length) {
      todo.create({completed: false, name: todo});
    }
  });
});
