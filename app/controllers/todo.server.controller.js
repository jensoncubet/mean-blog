'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
        errorHandler = require('./errors.server.controller'),
        Todo = mongoose.model('Todo'),
        _ = require('lodash');

/**
 * Create todo
 */
exports.saveTodo = function (req, res) {
    var todo = new Todo(req.body);

    todo.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(todo);
        }
    });
};

/**
 * get todo
 */
exports.getTodoList = function (req, res) {
    Todo.find({}, function (e, d) {
        res.json(d);
    });
};

/**
 * delete todo
 */
exports.deleteTodo = function (req, res) {
    Todo.remove({_id:req.body.todo_id}, function (e, d) {
        res.json(d);
    });
};