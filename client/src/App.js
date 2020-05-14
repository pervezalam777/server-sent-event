import React from 'react';
import './App.css';
import NestsPage from './pages/nestsPage';
import CoronaPage from './pages/coronaPage';
import {CoronaProvider} from './store/context/coronaStateContext';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Nests</Link>
          </li>
          <li>
            <Link to="/corona">Corona</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/corona">
          <CoronaProvider>
            <CoronaPage />
          </CoronaProvider>
        </Route>
        <Route path="/">
          <NestsPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
