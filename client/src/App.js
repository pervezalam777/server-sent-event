import React from 'react';
import './App.css';
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
            <Link to="/">Corona</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <CoronaProvider>
            <CoronaPage />
          </CoronaProvider>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
