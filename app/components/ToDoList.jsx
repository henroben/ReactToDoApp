var React = require('react');
var {ListGroup} = require('react-bootstrap');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderToDos = () => {
            return todos.map((todo) => {
                return (
                    <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                );
            });
        };
        return (
            <div>
                <ListGroup>
                    {renderToDos()}
                </ListGroup>
            </div>
        );
    }
});

module.exports = ToDoList;