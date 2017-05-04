var appActions = require('../actions/appActions')

module.exports = {
	searchMovies: function (movie) {
		$.ajax({
			url: 'http://www.omdbapi.com/?s=' + movie.title,
			dataType: 'json',
			cache: false,
			success: function (data) {
				appActions.receiveMovieResults(data.Search)
			}.bind(this),
			error: function (xhr, status, err) {
				alert(err)
			}.bind(this)
		})
	}
}