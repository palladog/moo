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
  const [state, setState] = useState({ghibli: null})

  const getGhibliData = () => {
    fetch('https://ghibliapi.herokuapp.com/films') // Returns all films
    .then(response=>response.json())
    .then(response => {
      setState({...state,
        ghibli: response
      })
    })
  }

  useEffect(() =>{
    getGhibliData()
  }, [])
  

  return (
    <div className="App">
      <Router>
        <Header/>
          <Nav />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
            <Route path="/not-watched">
              <NotWatched />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
