import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import './reset.css';
import Authorization from './scenes/Authorization/index.jsx'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/login'} exact component={Authorization} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
