var React = require('react')
var appActions = require('../actions/appActions')
var appStore = require('../stores/appStore')

var SearchForm = React.createClass({

	render: function () {
		return(
			<div className="row">
			<div className="mx-auto col-lg-10">

				<div className="overlay">
					<div className="overlay-content">
						<form onSubmit={this.onSubmit}>
							<input type="text" placeholder="Type a movie name.." ref="title"></input>
							<button type="submit"><i className="fa fa-search">Search</i></button>
						</form>
					</div>
				</div>
			</div>
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