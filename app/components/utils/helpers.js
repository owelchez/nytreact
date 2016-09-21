// Here we will utilize the axios library to perform GET/POST requests
var axios = require('axios');

// NY Times API
var nyTimesAPI = "6c0dead18a674567a06bf94aed10eb34";


var helpers = {
	runQuery: function(article){
		console.log(article);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nyTimesAPI + "&q=" + searchArticle;

      return axios.get(queryURL).then(function(response){
        console.log(response);
        return response.data.results[0].formatted;
    })
	}
}

module.exports = helpers;