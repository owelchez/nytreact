var React = require('react');
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var helpers = require('./utils/helpers.js');

var Main = React.createClass({
	
	getInitialState: function() {
		return {
			title: '',
			data: '',
			url: ''
		}
	},

	setTerm(term){
		this.setState({
			searchTerm: term
		})
	},

	componentDidUpdate: function(prevProps, prevState){
		console.log('Component Updated!');

		if (prevState.searchTerm != this.state.searchTerm){
			console.log("Updated!");

			helpers.runQuery(this.state.searchTerm)
			.then((data)=> {
				if (data != this.state.results)
				{
					console.log("Here");
					console.log(data);

					this.setState({
						results: data
					})
				}
			})
		}
	}


	render: function () {
		return (

				<div className="container">

					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times</strong></h1>
					</div>

					<div className="col-md-6">
						<Search setTerm={this.setTerm} />
					</div>


					<div className="col-md-6">
						<Results setTerm={this.setResults} />
					</div>


					<div className="col-md-6">
						<Saved article={this.state.saved} />
					</div>

				</div>
		);
	}
});

module.exports = Main;