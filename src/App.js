import React
from 'react';
import { Route, Switch }
from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Explore from './pages/Explore/Explore';
import FoodDetails from './pages/details/FoodDetails';
import DrinkDetails from './pages/details/DrinkDetails';
import Foods from './pages/Foods/Foods';
import Drinks from './pages/Drinks/Drinks';
import ExploreDrinks from
'./pages/Explore/ExploreDrinks/ExploreDrinks';
import ExploreFoods from
'./pages/Explore/ExploreFoods/ExploreFoods';
import ExploreFoodsByIngredients from
'./pages/Explore/ExploreFoodsBy/ExploreFoodsByIngredients';
import ExploreFoodsByNationalities from
'./pages/Explore/ExploreFoodsBy/ExploreFoodsByNationalities';
import ExploreDrinksByIngredients from
'./pages/Explore/ExploreDrinksBy/ExploreDrinksByIngredients';
import ExploreDrinksByNationalities from
'./pages/Explore/ExploreDrinksBy/ExploreDrinksByNationalities';
import Profile from
'./pages/Profile/Profile';

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
        <Route
          exact
          path="/explore"
          component={ Explore }
        />
        <Route
          exact
          path="/explore/foods"
          component={ ExploreFoods }
        />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsByIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreFoodsByNationalities }
        />
        <Route
          exact
          path="/explore/drinks"
          component={ ExploreDrinks }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksByIngredients }
        />
        <Route
          exact
          path="/explore/drinks/nationalities"
          component={ ExploreDrinksByNationalities }
        />
      </Switch>
    </div>
  );
}

export default App;
