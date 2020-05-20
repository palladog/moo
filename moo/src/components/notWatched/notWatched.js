import React from 'react';
import MovieContainer from '../movies/movieContainer/movieContainer';

export default (props) => {
    let notWatchedMovies = props.movies.filter(movie => movie.rating === null)
    if(notWatchedMovies.length === 0){
        return("DU HAR DÅ SETT ALLA FILMER") //placeholder
    }
    return (
        <React.Fragment>
            <h2 className="hidden">Not Watched</h2>
            <p>Not watched...</p>
            <MovieContainer movies={notWatchedMovies}/>
        </React.Fragment>
        
    )
}