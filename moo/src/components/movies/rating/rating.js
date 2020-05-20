import React from 'react';
import star from '../../../resources/star.svg';

export default (props) => {
    return (
        <div className="rating-container">
            <div className="rating-item">
                <label className="rating-item-star" for="first-star">
                    {star}
                </label>
                <input className="rating-item-radio hidden" type="radio" name="star" id="first-star" value="1" />
                    
                <label className="rating-item-star" for="second-star">
                    {star}
                </label>
                <input className="rating-item-radio hidden" type="radio" name="star" id="second-star" value="2" />

                <label className="rating-item-star" for="third-star">
                    {star}
                </label>
                <input className="rating-item-radio hidden" type="radio" name="star" id="third-star" value="3" />

                <label className="rating-item-star" for="fourth-star">
                    {star}
                </label>
                <input className="rating-item-radio hidden" type="radio" name="star" id="fourth-star" value="r" />

                <label className="rating-item-star" for="fifth-star">
                    {star}
                </label>
                <input className="rating-item-radio hidden" type="radio" name="star" id="fifth-star" value="5" />
            </div>
            <div ClassName="remove-rating">
                <a href="#" class="clear-rating"/>
            </div>   
        </div>
        
    )
}