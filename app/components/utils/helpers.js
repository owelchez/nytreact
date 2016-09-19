// Here we will utilize the axios library to perform GET/POST requests
var axios = require('axios');

// NY Times API
var nyTimesAPI = "6c0dead18a674567a06bf94aed10eb34";


var helpers = {
	runQuery: function(article){
		console.log(article);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nyTimesAPI + "&q=" + searchArticle;
	}
}

/*
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "6c0dead18a674567a06bf94aed10eb34",
  'q': "garifuna"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
*/