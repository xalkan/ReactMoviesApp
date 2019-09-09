var React = require('react')
var appActions = require('../actions/appActions')
var appStore = require('../stores/appStore')
var Movie = require('./Movie')


var MovieResults = React.createClass({

	render: function () {
		return(
			<div className="mx-auto col-lg-10">
				
				{
					this.props.movies.map(function(movie, i) {
						return (
							<Movie movie={movie} key={i} />
						)
					})
				}
			</div>
		)
	}

})

module.exports = MovieResults