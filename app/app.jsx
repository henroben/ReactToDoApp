var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');  //ES6 method
//var Route = require('react-router').Route; // ES5 method - set up for each
var ToDoApp = require('ToDoApp');


// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//load app styles
require('applicationStyles');

ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('app')
);