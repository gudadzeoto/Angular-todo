angular.module("todoApp")
.controller('actionsCtrl', function ($scope, dataService) {
    $scope.todos = dataService.get();

    $scope.add = function () {
        var todo = {
            name: 'This is a new todo.'
        };
        $scope.todos.unshift(todo);
    };

    $scope.delete = function (todo, $index) {
        dataService.delete(todo);
        $scope.todos.splice($index, 1);
    };

    $scope.save = function () {
        dataService.save($scope.todos);
    };
});
