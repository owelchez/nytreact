var React = require('react');
var Search = require('./Search');

var Main = React.createClass({
	





	render: function () {
		return (

				<div className="container">

					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times</strong></h1>
					</div>
					<Search />
				</div>
		);
	}
});

module.exports = Main;