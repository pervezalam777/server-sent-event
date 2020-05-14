import React from 'react';
import NestsPage from './page/nests'
import CoronaPage from './page/corona'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom"

function App() {

  return ( 
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/corona">Corona</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/corona">
          <CoronaPage />
        </Route>
        <Route path="/">
          <NestsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
