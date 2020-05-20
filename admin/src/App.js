import React from 'react';
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
              <Link to="/">Corona</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/">
          <CoronaPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
