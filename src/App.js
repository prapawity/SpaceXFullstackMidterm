import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Home from './views/Home';

function App() {
  let routes = (
    <Switch>
      {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );

  let linkPath = (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <Router>
      <div>
        {linkPath}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {routes}
      </div>
    </Router>
  );
}

export default App;
