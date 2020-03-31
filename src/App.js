import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './reset.css';
import Authorization from './scenes/Authorization/index';
import TestView from './scenes/TestView/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Authorization} />
        <Route path="/test" exact component={TestView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
