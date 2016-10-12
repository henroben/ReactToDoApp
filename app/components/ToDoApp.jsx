var React = require('react');
var {Grid, Row, Col} = require('react-bootstrap');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
    getInitialState() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Feed the cat'
                },
                {
                    id: 2,
                    text: 'Walk the dog'
                },
                {
                    id: 3,
                    text: 'Sweep garden'
                },
                {
                    id: 4,
                    text: 'Learn React'
                }
            ]
        };
    },
    render: function() {
        var {todos} = this.state;

        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} xsHidden></Col>
                        <Col md={6}>
                            <ToDoList todos={todos}/>
                        </Col>
                        <Col md={3} xsHidden></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

module.exports = ToDoApp;