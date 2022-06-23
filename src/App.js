import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Explore from './pages/Explore/Explore';
import FoodDetails from './pages/details/FoodDetails';
import DrinkDetails from './pages/details/DrinkDetails';
import Foods from './pages/Foods/Foods';
import Drinks from './pages/Drinks/Drinks';

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
          path="/explore"
          component={ Explore }
        />
      </Switch>
    </div>
  );
}

export default App;
