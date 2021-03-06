var $ = require('jQuery');

module.exports = {
    setToDos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getToDos: function() {
        var stringToDos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringToDos);
        } catch (e) {

        }

        //if($.isArray(todos)) {
        //    return todos;
        //} else {
        //    return [];
        //}

        return $.isArray(todos) ? todos : [];
    },
    filterToDos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by show completed
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // filter by search text

        // sort with none completed first

        return filteredTodos;
    }
};