import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export default () => {
    return(
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">All</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li>
                <Link to="/not-watched">Not Watched</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              {/* <Home /> */}
            </Route>
            <Route path="/watched">
              {/* <Watched /> */}
            </Route>
            <Route path="/not-watched">
              {/* <Not-watched /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    )
}