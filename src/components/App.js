var React = require('react')
var appActions = require('../actions/appActions')
var appStore = require('../stores/appStore')
var SearchForm = require('./SearchForm')
var MovieResults = require('./MovieResults')


function getAppState() {
	return {
		movies: appStore.getMovieResults()
	}
}

var App = React.createClass({

	getInitialState: function () {
		return getAppState();
	},

	componentDidMount: function () {
		appStore.addChangeListener(this._onChange)
	},

	componentWillMount: function () {
		appStore.removeChangeListener(this._onChange)
	},
	
	render: function () {
		if(this.state.movies == '') {
			var movieResults = ''
		}
		else {
			var movieResults = <MovieResults movies={this.state.movies} />
		}
		return(
			<div>
				<SearchForm />
				{movieResults}
			</div>
		)
	},

	_onChange: function () {
		this.setState(getAppState());
	}
})

module.exports = App