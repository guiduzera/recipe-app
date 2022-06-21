import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './pages/Foods';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <Route
          exact
          path="/foods"
          component={ Foods }
        />
        <Route
          exact
          path="/foods/:id"
          component={ FoodDetails }
        />
        <Route
          exact
          path="/drinks/:id"
          component={ DrinkDetails }
        />
      </Switch>
    </div>
  );
}

export default App;
