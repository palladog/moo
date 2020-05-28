import React from 'react';
import './message.css'

export default (props) => {
    return(
        <div className="msg">
            {props.msg}
        </div>
    )
}