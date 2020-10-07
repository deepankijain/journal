import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { useStateValue } from './hooks/StateProvider';

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className='app'>
      <Router>
        <Switch>
          {user && (
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
          )}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
