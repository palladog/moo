import React from 'react';
import MovieContainer from '../movies/movieContainer/movieContainer'
import { loadFromStorage } from '../../App';

export default (props) => {
    return (
        <React.Fragment>
            <h2 className="hidden">All movies</h2> 
            <MovieContainer movies={loadFromStorage() || props.movies}/>
        </React.Fragment>
    )
}