import React from 'react';
import PropTypes from 'prop-types'
import "./Movies.css"

function Movies({year,title,summary,poster}){
    return <div class = "movies_movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movie_data">
            <h3 class="movie_title">{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    </div>
}

Movies.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title :PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movies;