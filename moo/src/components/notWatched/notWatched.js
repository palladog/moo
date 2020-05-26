import React from 'react';
import MovieContainer from '../movies/movieContainer/movieContainer';
import { loadFromStorage } from '../../App';
import Message from '../message/message'

export default (props) => {
    const msg = "You have watched all the movies there are " //placeholder
    let notWatchedMovies = loadFromStorage().filter(movie => movie.rating === null)
    if(notWatchedMovies.length === 0){
        return(<Message msg={msg} />)
    }
    return (
        <React.Fragment>
            <h2 className="hidden">Not Watched</h2>
            <MovieContainer movies={notWatchedMovies}/>
        </React.Fragment>
        
    )
}