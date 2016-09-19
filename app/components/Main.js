var React = require('react');
var Search = require('./Search');
var Results = require('./Results');

var Main = React.createClass({
	





	render: function () {
		return (

<div>
				<div className="container">

					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times</strong></h1>
					</div>
				</div>

				<Search />
</div>
		);
	}
});

module.exports = Main;