import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodDetails from './pages/details/FoodDetails';
import DrinkDetails from './pages/details/DrinkDetails';
import Foods from './pages/Foods/Foods';
import Drinks from './pages/Drinks/Drinks';
import RecipeFoodProgress from './pages/Recipe_in_Progress/RecipeFoodProgress';
import RecipeDrinkProgress from './pages/Recipe_in_Progress/RecipeDrinkProgress';
import DoneRecipes from './pages/DoneRecipes/DoneRecipes';

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
          path={ `/foods/${':id'}/in-progress` }
          component={ RecipeFoodProgress }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ RecipeDrinkProgress }
        />
        <Route
          exact
          path="/done-recipes"
          component={ DoneRecipes }
        />
      </Switch>
    </div>
  );
}

export default App;
