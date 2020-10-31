angular.module("todoApp")
.controller('actionsCtrl', function ($scope, dataService) {
    $scope.todos = dataService.get();

    $scope.add = function () {
        var index = dataService.get().length + 1;
        var todo = {
            name: 'This is a new todo. #' + index
        };
        dataService.add(todo);
        $scope.todos.unshift(todo);
    };

    $scope.edit = function () {
        $scope.save();
    };

    $scope.delete = function ($index) {
        $scope.todos.splice($index, 1);
        $scope.save();
    };

    $scope.check = function () {
        $scope.save();
    };

    $scope.save = function () {
        var todos = [];

        $scope.todos.map(function (currentTodo) {
            todos.push({
                name: currentTodo.name,
                completed: currentTodo.completed || false
            });
        });

        dataService.save(todos);
    };
});
