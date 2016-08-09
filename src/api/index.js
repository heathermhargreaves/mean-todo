'use strict';

var express = require('express');
var Todo = require('../models/todo')
var todos = require('../../mock/todos.json')


var router = express.Router();

//GET (prefix routes with /api so there is no way they can conflict with the public routes)
router.get('/todos', function(req, res) {
  Todo.find({}, function(err, todos) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    res.json({todos: todos});
  })

});

// TODO: add POST route to create new entries
router.post('/todos', function(req, res) {
  var todo = req.body;
  Todo.create(todo, function(err, todo) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.send({'todo': todo, message: 'Todo Created'});
  })

})


// TODO: add PUT route to update existing entries
router.put('/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  if(todo && todo._id !== id) {
    return res.status(500).json({err: "Ids don't match"});
  }
  Todo.findByIdAndUpdate(id, todo, function(err, todo) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.send({'todo': todo, message: 'Todo Updated'});
  })

})


// TODO: add DELETE route to delete entries

module.exports = router;
