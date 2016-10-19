var React = require('react');
var {Button} = require('react-bootstrap');

var AddToDo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var strText = this.refs.addtext.value;

        if(strText.length > 0) {
            this.refs.addtext.value = '';
            this.props.onAddToDo(strText);
        } else {
            this.refs.addtext.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="testForm">
                    <input type="text" ref="addtext" placeholder="What do you need to do?" className="form-control"/>
                    <Button type="submit" bsStyle="primary" block>Add</Button>
                </form>
            </div>
        );
    }
});

module.exports = AddToDo;