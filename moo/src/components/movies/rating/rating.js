import React, { useState } from 'react';
import './rating.css';
import Star from '../../../resources/star.js';
import CrissCross from '../../../resources/crissCross.js';

export default (props) => {   
    const [rating, setRating] = useState(props.rating);
    const [hover, setHover] = useState(null);
    const [crossHover, setCrossHover] = useState(null);

    const onClickHandler = (e) => {
        let rating = e.target.value === undefined ? null : e.target.value
        setRating(rating)
        props.updateRating(rating)
    };

    return (
        <div
        onMouseEnter={() => setCrossHover(true)}
        onMouseLeave={() => setCrossHover(false)}>
                    {[...Array(5)].map((el, i) => {
                const ratingVal = i + 1;
                return(
                    <span key={i}>
                        <label>
                            <input 
                            className="hidden"
                            type="radio" 
                            name="star" 
                            value={ratingVal}
                            onClick={onClickHandler}
                            />
                            <Star
                            alt='rating-star'
                            setHover={setHover}
                            ratingVal={ratingVal}
                            color={ratingVal <= (hover || rating) ? '#FFC107' : '#333'}                                 
                            />
                        </label>
                    </span>
                )}
            )}
            <CrissCross 
            opacity={crossHover ? 1 : 0}
            remove={onClickHandler}
            />
        </div>
    )
}