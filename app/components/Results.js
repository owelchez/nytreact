var React = require('react');
var Saved = require('./Saved');

var Results = React.createClass({
	render: function () {
		return (

<div>
	<div className="row">
			<div className="col-sm-12">
				<br />

				<div className="panel panel-primary">

					<div className="panel-heading">
						<h3 className="panel-title text-center"><strong><i className="fa fa-table"></i>Results</strong></h3>
					</div>

					<div className="panel-body" id="wellSection">
							<div className="panel panel-default">
		  						<div className="panel-body"><a  target="_blank" href="http://www.nytimes.com/2016/10/08/fashion/katie-holmes-rooney-mara-chloe-grace-moretz-cartier-new-york-fashion-week-kickoff.html">Cartier’s Fifth Avenue Mansion reopens; Nelly Furtado performs at the Top of the Standard to a fashion crowd.</a><button className="btn btn-primary btn-sm" className="dataButtonResults">Save</button>
		  						</div>
							</div>
					</div>

				</div>
			</div>
    </div>
					<Saved />
</div>
		);
	}
});

module.exports = Results;