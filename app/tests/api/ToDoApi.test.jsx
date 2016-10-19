var expect = require('expect');
var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    it('should exist', () => {
        expect(ToDoAPI).toExist();
    });

    describe('setToDos', () => {
        beforeEach(() => {
            localStorage.removeItem('todos');
        });

        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'Test all files',
                completed: false
            }];

            ToDoAPI.setToDos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};

            ToDoAPI.setToDos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getToDos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = ToDoAPI.getToDos();

            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage', () => {
            var todos = [{
                id: 23,
                text: 'Test all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = ToDoAPI.getToDos();

            expect(actualTodos).toEqual(todos);
        });
    });
});