// Include the main React dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the main component
var Main = require('./components/Main');

// This here is to render our app "Parent"
ReactDOM.render(
	<Main />, 
	document.getElementById('app')
);