var axios = require('axios')
var appActions = require('../actions/appActions')

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

module.exports = {
	searchMovies: async function (movie) {
		// $.ajax({
		// 	url: 'http://www.omdbapi.com/?s=' + movie.title,
		// 	dataType: 'json',
		// 	cache: false,
		// 	success: function (data) {
		// 		appActions.receiveMovieResults(data.Search)
		// 	}.bind(this),
		// 	error: function (xhr, status, err) {
		// 		alert(err)
		// 	}.bind(this)
		// })

		var url = 'http://www.omdbapi.com/?apikey=' + API_KEY + '&s=' + movie.title
		var response = await axios.get(url)
		console.log(url)
		console.log(response.data)
		appActions.receiveMovieResults(response.data.Search)
	}
}