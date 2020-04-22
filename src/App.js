import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './reset.css';
import Authorization from './scenes/Authorization/index';
import AdminPage from './scenes/AdminPage/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Authorization} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
