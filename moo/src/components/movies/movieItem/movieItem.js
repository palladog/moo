import React, {useState} from 'react';
import { Modal } from 'react-responsive-modal';

export default (props) => {
    const [state, setState] = useState({open: false});
    const {img, title, year, poster, description, imdb, director} = props.movie

    const onOpenModal = () => {
        setState({ open: true });
    };

    const onCloseModal = () => {
        setState({ open: false });
    }

    return(
        <React.Fragment>
            <div className="movie-item" onClick={onOpenModal}>
                <img className="movie-item-image" src={poster} alt={title} />
                <h3 className="movie-item-title">{title}</h3>
                <p className="movie-item-year">{year}</p>
            </div>

            <Modal className="movie-modal" open={state.open} onClose={onCloseModal}>
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
            </Modal>
        </React.Fragment>
    )
}