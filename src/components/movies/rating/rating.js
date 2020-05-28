import React, { useState } from 'react';
import './rating.css';
import Star from '../../../resources/star.js';
import CrissCross from '../../../resources/crissCross.js';

export default (props) => {   
    const [rating, setRating] = useState(props.rating);
    const [hover, setHover] = useState(null);
    const [crossHover, setCrossHover] = useState(window.innerWidth <= 900 ? true :null); //if width is wider doesnt need to hover to remove rating

    const onClickHandler = (e) => {
        e.preventDefault();
        setRating(hover);
        props.updateRating(hover);
    };

    return (
        <div
        onMouseEnter={() => setCrossHover(true)}
        onMouseLeave={() => setCrossHover(false)}>
                    {[...Array(5)].map((el, i) => {
                const ratingVal = i + 1;
                return(
                    <span key={i} onClick={onClickHandler} className="unclose">
                        <label>
                            <input 
                            className="hidden unclose"
                            type="radio" 
                            name="star" 
                            value={ratingVal}
                            />
                            <Star
                            className="unclose"
                            setHover={setHover}
                            ratingVal={ratingVal}
                            color={ratingVal <= (hover || rating) ? 'var(--yellow)' : '#333'}                                 
                            />
                        </label>
                    </span>
                )}
            )}
            <CrissCross 
            className="unclose"
            opacity={crossHover ? 1 : 0}
            remove={onClickHandler}
            />
        </div>
    )
}