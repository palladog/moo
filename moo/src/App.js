import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav/nav'
import Header from './components/header/header';
import Home from './components/home/home';
import Watched from './components/watched/watched';
import NotWatched from './components/notWatched/notWatched';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [state, setState] = useState({movies:[]})

  const getData = () => {
    fetch('https://ghibliapi.herokuapp.com/films') // Returns all films
    .then(response=>response.json())
    .then(response => {
      response.forEach(item => {
        getMovieDetz(item)
      });
    })
  }
  
  const getMovieDetz = (ghibli) => {
    fetch(`http://www.omdbapi.com/?t=${ghibli.title}&apikey=50c51323`) // Returns a movie from OMDB
    .then(response => response.json())
    .then(response => {
          let movie = {
          title: ghibli.title,
          year: ghibli.release_date,
          description: ghibli.description,
          director: ghibli.director,
          poster: response.Poster,
          imdb: `https://www.imdb.com/title/${response.imdbID}`,
          rating: null
        }
        let movies = state.movies
        movies.push(movie)
        setState({movies: movies})
      }
    )
  }

  useEffect(() =>{
      getData()
  }, []) 

  return (
    <div className="App">
      <Router>
        <Header/>
          <Nav />
          <Switch>
            <Route path="/watched">
              <Watched />
            </Route>
            <Route path="/not-watched">
              <NotWatched />
            </Route>
            <Route path="/">
              <Home movies={state.movies}/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
