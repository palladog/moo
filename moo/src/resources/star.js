import React from 'react'

export default (props) => {
    const {color, width, height } = props;

    return(
        <svg 
        onMouseEnter={() => props.setHover(props.ratingVal)}
        onMouseLeave={() => props.setHover(null)}
        width={'6%'} viewBox="0 0 53.867 53.867">
            <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 " fill={color ? color : "#333"} />
        </svg>
)
}