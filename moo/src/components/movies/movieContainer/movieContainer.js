import React from 'react';
import MovieItem from '../movieItem/movieItem'
import './movieContainer.css'

export default (props) => {
    return(
        <div className="movie-container">
            {props.movies.map((item, i) => {
                return <MovieItem key={i} movie={item}/>
            })}
        </div>
    )
}