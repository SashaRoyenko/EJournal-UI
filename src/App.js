import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Registration from './components/registration/registration'

function App() {

  return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path={'/login'} exact component={Registration} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
