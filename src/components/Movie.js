var React = require('react')

var Movie = React.createClass({
	render: function () {

		var link = "http://www.imdb.com/title/" + this.props.movie.imdbID

		return (
			<div className="well">
				<div className="row my-5">
					<div className="col-md-4">
						<img className="thumnail" src={this.props.movie.Poster} />
					</div>
					<div className="col-md-8">
						<h4>{this.props.movie.Title}</h4>
						
								<p><b>Year:</b> {this.props.movie.Year} </p>
								<p><b>IMDB ID:</b> {this.props.movie.imdbID} </p>
						
						<a className="btn btn-primary my-1" href={link} target="_blank">View on IMDB</a>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Movie
