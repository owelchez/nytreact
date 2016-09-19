// Include Mongoose dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
	title: {
		type: String
	},
		date: {
			type: Date
		},
		url: {
			type: String
		}
	})



// Create the model
var Article = mongoose.model('Article', ArticleSchema);

//Export model to be used somewhere else
module.exports = Article;