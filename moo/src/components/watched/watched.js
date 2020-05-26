import React from 'react';
import MovieContainer from '../movies/movieContainer/movieContainer';
import { loadFromStorage } from '../../App';

export default (props) => {

    let watchedMovies = loadFromStorage().filter(movie => movie.rating !== null)
    if(watchedMovies.length === 0){
        return("KOLLA PÅ NÅGON FILM OCH BETYGSÄTT DEN DÅ") //placeholder
    }
    return (
        <React.Fragment>
            <h2 className="hidden">Watched</h2>
            <p>WATCHED!</p>
            <MovieContainer movies={watchedMovies}/>
        </React.Fragment>       
    )
}