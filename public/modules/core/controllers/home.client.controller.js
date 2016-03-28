'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$http',
    function ($scope, Authentication, $http) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.todo = {};
        $scope.todoArray = [];
        /*
         * save todo
         */
        $scope.saveTodo = function () {
            $http.post('/save/todo', $scope.todo).success(function (response) {
                $scope.todoArray.push(response);
                $scope.todo = {};

            }).error(function (response) {
                $scope.error = response.message;
            });
        };
        /*
         * get todo list
         */
        $scope.getTodoList = function () {
            $http.get('/getTodoList').success(function (response) {
                $scope.todoArray = response;

            }).error(function (response) {
                $scope.error = response.message;
            });
        };
        /*
         * delete todo list
         */
        $scope.deleteTodo = function (todo_id, index) {
            $http.post('/deleteTodo',{todo_id:todo_id}).success(function (response) {
              $scope.todoArray.splice(index, 1);
            }).error(function (response) {
                $scope.error = response.message;
            });
        };
    }
]);