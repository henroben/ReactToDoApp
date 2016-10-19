var React = require('react');
var {Grid, Row, Col} = require('react-bootstrap');
var uuid = require('node-uuid');

var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
    getInitialState() {
        return {
            showCompleted: false,
            searchText: '',
            todos: ToDoAPI.getToDos()
        };
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase(),
        });
    },
    componentDidUpdate: function() {
        ToDoAPI.setToDos(this.state.todos);
    },
    handleAddToDo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    },
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = ToDoAPI.filterToDos(todos, showCompleted, searchText);

        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} xsHidden></Col>
                        <Col md={6}>
                            <ToDoSearch onSearch={this.handleSearch}/>
                            <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddToDo onAddToDo={this.handleAddToDo}/>
                        </Col>
                        <Col md={3} xsHidden></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

module.exports = ToDoApp;