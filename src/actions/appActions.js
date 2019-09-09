var appDispatcher = require('../dispatcher/appDispatcher')
var appConstants = require('../constants/appConstants')

var appActions = {
	searchMovies: function (movie) {
		console.log('searcgbibg')
		appDispatcher.handleViewAction({
			actionType: appConstants.SEARCH_MOVIES,
			movie: movie
		})
	},

	receiveMovieResults: function (movies) {
		appDispatcher.handleViewAction({
			actionType: appConstants.RECEIVE_MOVIE_RESULTS,
			movies: movies
		})
	}
}


module.exports = appActions