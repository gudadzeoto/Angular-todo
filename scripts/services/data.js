angular.module("todoApp")
.service('dataService', function () {
    this.get = function () {
        return [
            {"name": "feed the dog"},
            {"name": "clean the house"},
            {"name": "water the lawn"},
            {"name": "pay bills"},
            {"name": "swim"}
        ];
    };

    this.delete = function (todo) {
        console.log(todo.name + ' has been deleted');
    };

    this.save = function (todos) {
        console.log('there is ' + todos.length + ' todos');
    };
});
