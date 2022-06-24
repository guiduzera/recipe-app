import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodDetails from './pages/details/FoodDetails';
import DrinkDetails from './pages/details/DrinkDetails';
import Foods from './pages/Foods/Foods';
import Drinks from './pages/Drinks/Drinks';
import Profile from './pages/Profile/Profile';

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
          path="/drinks"
          component={ Drinks }
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
        <Route
          exact
          path="/profile"
          component={ Profile }
        />
      </Switch>
    </div>
  );
}

export default App;
