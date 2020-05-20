import React from 'react';
import MovieContainer from '../movies/movieContainer/movieContainer'

export default (props) => {
    return (
        <React.Fragment>
            <h2 className="hidden">All movies</h2> 
            <p>home</p>
            <MovieContainer movies={props.movies}/>
        </React.Fragment>
    )
}