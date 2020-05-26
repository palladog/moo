import React, { useState } from 'react';
import './movieItem.css'
import Rating from '../rating/rating'
import { loadFromStorage, saveToStorage } from '../../../App'
import imdbImg from '../../../resources/imdb.jpg'

export default (props) => {
    const {title, year, poster, description, imdb, director, rating} = props.movie;
    const [state, setState] = useState({open: false});
    
    const toggleModal = (e) => {
        if(!e.target.className.baseVal){
            if(!e.target.className.includes('unclose')){
                let currentState = state.open;
                setState({ open: !currentState});
            };
        };
    };

    const updateRating = (rating) => {
        let movies = loadFromStorage()
        const index = movies.findIndex(movie => movie.title === title)
        movies[index].rating = rating
        saveToStorage(movies)
    }

    return(
        <React.Fragment>
            <div className="movie-item" onClick={toggleModal}>
                <img className="movie-item-image" src={poster} alt={title} />
                <h3 className="movie-item-title">{title}</h3>
                <p className="movie-item-year">{year}</p>
            </div>

            <div className={`movie-modal-container ${state.open ? "show-modal" : ""}`} onClick={toggleModal}>
                <div className={`movie-modal`}>
                    <img className="movie-modal-image" src={poster} alt={title} />
                    <h3 className="movie-modal-title">{title}</h3>
                    <p className="movie-modal-year">{year}</p>

                    <div className="movie-modal-content">
                        <h4 className="movie-modal-heading">Description</h4>
                        <p className="movie-modal-description">{description}</p>
                    </div>
                    <div className="movie-modal-content">
                        <h4 className="movie-modal-heading">Director</h4>
                        <p className="movie-modal-director">{director}</p>
                    </div>
                    <div className="movie-modal-content">
                        <h4 className="movie-modal-heading">Read more</h4>
                        <a className="imdb-logo unclose" target="_blank" href={imdb}><img className="unclose" src={imdbImg}/></a>
                    </div>
                    <Rating updateRating={updateRating} rating={rating}/>
                </div>
            </div>
        </React.Fragment>
    )
}