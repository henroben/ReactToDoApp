var React = require('react');
var {ListGroupItem} = require('react-bootstrap');

var ToDo = React.createClass({
    render: function () {
        var {id, text} = this.props;
        return (
            <div>
                <ListGroupItem>
                    {id}. {text}
                </ListGroupItem>
            </div>
        );
    }
});

module.exports = ToDo;