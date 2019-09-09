var appDispatcher = require('../dispatcher/appDispatcher')
var appConstants = require('../constants/appConstants')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var appAPI = require('../utils/appAPI')

var CHANGE_EVENT = 'change'

var _movies = []
var _selected = ''

var appStore = assign({}, EventEmitter.prototype, {
	setMovieResults: function (movies) {
		_movies = movies
	},
	getMovieResults: function () {
		return _movies
	},
	emitChange: function () {
		this.emit(CHANGE_EVENT)
	},
	addChangeListener: function (callback) {
		this.on('change', callback)
	},
	removeChangeListener: function (callback) {
		this.removeListener('change', callback)
	}
})

appDispatcher.register(function (payload) {
	var action = payload.action
	switch(action.actionType){
		case appConstants.SEARCH_MOVIES:
			//console.log('case search' + action.movie.title)
			
			appAPI.searchMovies(action.movie)
			appStore.emit(CHANGE_EVENT)
			break

		case appConstants.RECEIVE_MOVIE_RESULTS:
			appStore.setMovieResults(action.movies)
			appStore.emit(CHANGE_EVENT)
			break
	}

	return true
})

module.exports = appStore