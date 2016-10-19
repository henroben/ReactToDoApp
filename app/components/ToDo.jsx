var React = require('react');
var {ListGroupItem} = require('react-bootstrap');

var ToDo = React.createClass({
    render: function () {
        var {id, text, completed} = this.props;
        return (
            <div>
                <ListGroupItem onClick={() => {
                    this.props.onToggle(id);
                }}>
                    <input type="checkbox" checked={completed}/> {text}
                </ListGroupItem>
            </div>
        );
    }
});

module.exports = ToDo;