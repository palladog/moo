import React from 'react';
import MovieContainer from '../movies/movieContainer/movieContainer';
import { loadFromStorage } from '../../App';
import Message from '../message/message'

export default (props) => {
    const msg = "Watch a movie, grade it, then return here!"//placeholder
    let watchedMovies = loadFromStorage().filter(movie => movie.rating !== null)
    if(watchedMovies.length === 0){
        return(<Message msg={msg}/>) 
    }
    return (
        <React.Fragment>
            <h2 className="hidden">Watched</h2>
            <p>WATCHED!</p>
            <MovieContainer movies={watchedMovies}/>
        </React.Fragment>       
    )
}