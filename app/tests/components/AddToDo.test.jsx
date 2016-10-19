var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {

    it('should exist', () => {
        expect(AddToDo).toExist();
    });

    it('should call onAddToDo if task entered', () => {
        var todoText = 'Test input';
        var spy = expect.createSpy();
        var addToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDoForm));

        addToDoForm.refs.addtext.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddToDo if no task entered', () => {
        var todoText = '';
        var spy = expect.createSpy();
        var addToDoForm = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addToDoForm));

        addToDoForm.refs.addtext.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});