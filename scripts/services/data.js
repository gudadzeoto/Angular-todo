angular.module("todoApp")
.service('dataService', function () {
    this.get = function () {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    this.add = function (todo) {
        var todos = this.get();
        todos.unshift(todo);
        this.save(todos);
        console.log(todo.name + ' has been added');
    };

    this.delete = function (todo) {
        var todos = this.get().filter(function (currentTodo) {
            if (currentTodo.name === todo.name) {
                return false;
            }
        });

        this.save(todos);
        console.log(todo.name + ' has been deleted');
    };

    this.save = function (todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('there is ' + todos.length + ' todos');
    };
});
