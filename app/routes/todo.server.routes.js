'use strict';

module.exports = function(app) {
	// Root routing
	var todo = require('../../app/controllers/todo.server.controller');
	app.route('/save/todo').post(todo.saveTodo);
	app.route('/getTodoList').get(todo.getTodoList);
	app.route('/deleteTodo').post(todo.deleteTodo);
};
