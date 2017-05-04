var React = require('react')
var appActions = require('../actions/appActions')
var appStore = require('../stores/appStore')

var SearchForm = React.createClass({

	render: function () {
		return(
			<div className="search-form">
				<h1 className="text-center">Search for a Movie</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="Enter title" />
					</div>
					<button className="btn btn-primary btn-block">Search Movies</button>
				</form>
			</div>
		)
	},

	onSubmit: function (event) {
		event.preventDefault();

		var movie = {
			title: this.refs.title.value.trim()	
		}

		appActions.searchMovies(movie)
		
	}

})

module.exports = SearchForm