import React from 'react';
import MovieItem from '../movieItem/movieItem'

export default (props) => {
    /* const {ghibli} = props.movies
    */
   console.log(props) 
    return(
        <React.Fragment>
            {props.movies.map(function(item, i){
                return <MovieItem key={i} movie={item}/>
                })}
            
        </React.Fragment>
    )
}