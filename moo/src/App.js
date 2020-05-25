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

export const loadFromStorage = () => {
  let jsonMovies = localStorage.getItem('movies')
  let movies = JSON.parse(jsonMovies)
  return movies
}

export const saveToStorage = (data) => {
  localStorage.setItem('movies', JSON.stringify(data))
  console.log("Saved to local storage")
}

function App() {
  const [state, setState] = useState({movies:[]})

  const getData = () => {
    let movies = loadFromStorage()
    if (movies !== null) {
      setState({movies: movies})
      return
    }
    fetch('https://ghibliapi.herokuapp.com/films') // Returns all films
    .then(response => response.json())
    .then(response => {
      response.forEach(item => {
        getMovieDetz(item)
      })
    })
  }
  
  const getMovieDetz = (ghibli) => {
    fetch(`http://www.omdbapi.com/?t=${ghibli.title}&apikey=50c51323`) // Returns a Ghibli movie from OMDb
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
        saveToStorage(state.movies)
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
              <Watched movies={state.movies}/>
            </Route>
            <Route path="/not-watched">
              <NotWatched movies={state.movies}/>
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
