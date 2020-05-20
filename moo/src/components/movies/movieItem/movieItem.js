import React, {useState} from 'react';
import './movieItem.css'

export default (props) => {
    const {title, year, poster, description, imdb, director} = props.movie
    const [state, setState] = useState({open: false})
    
    const toggleModal = () => {
        let currentState = state.open
        setState({ open: !currentState});
        console.log("modal")
    };

    return(
        <React.Fragment>
            <div className="movie-item" onClick={toggleModal}>
                <img className="movie-item-image" src={poster} alt={title} />
                <h3 className="movie-item-title">{title}</h3>
                <p className="movie-item-year">{year}</p>
            </div>

            <div className="movie-modal-container">
                <div className={`movie-modal ${state.open ? "show-modal" : ""}`} onClose={toggleModal}>
                    <img className="movie-modal-image" src={poster} alt={title} />
                    <h3 className="movie-modal-title">{title}</h3>
                    <p className="movie-modal-year">{year}</p>

                    <div className="movie-modal-container">
                        <h4 className="movie-modal-heading">Description</h4>
                        <p className="movie-modal-description">{description}</p>
                    </div>
                    <div className="movie-modal-container">
                        <h4 className="movie-modal-heading">Director</h4>
                        <p className="movie-modal-director">{director}</p>
                    </div>
                    {/* RATING COMPONENT */}
                </div>
            </div>
        </React.Fragment>
    )
}