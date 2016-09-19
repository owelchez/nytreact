var React = require('react');
var Results = require('./Results');

var Search = React.createClass({

	//React.DOM.label( {"for": "name"}, "name");

	render: function () {
		return (

<div className="container">
	<div className="row">
		<div className="col-sm-12">
		<br />
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong><i className="fa fa-list-alt"></i>Search Articles</strong></h3>
				</div>
				<div className="panel-body">

					<form role="form">

					  <div className="form-group text-center">
					    <label htmlFor="search">Search Term:</label>
					    <input type="text" className="form-control text-center" id="searchTerm" placeholder="Garifuna" />
					  </div>


					  <div className="form-group text-center">
					    <label htmlFor="startYear">Start Year (Optional):</label>
					    <input type="text" className="form-control text-center" id="startYear" placeholder="yyyy" />
					  </div>

					  <div className="form-group text-center">
					    <label htmlFor="endYear">End Year (Optional):</label>
					    <input type="text" className="form-control text-center" id="endYear" placeholder="yyyy" />
					  </div>

					  <div className="text-center">
					  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i>Search</button>
  					  <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i>Clear Results</button>
  					  </div>

					</form>
				</div>
			</div>
		</div>
	</div>
<h1>Hello</h1>

</div>
		);
	}
});

module.exports = Search;