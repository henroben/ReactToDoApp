var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');
var ToDo = require('ToDo');

var ToDoList = require('ToDoList');

describe('ToDoList', () => {
    it('should exist', () => {
        expect(ToDoList).toExist();
    });

    it('should render one ToDo component for each todo item', () => {
        var todos =[
            {
                id: 1,
                text: 'Do something'
            },
            {
                id: 2,
                text: 'Do something else'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

        expect(todosComponents.length).toBe(todos.length);
    });
});