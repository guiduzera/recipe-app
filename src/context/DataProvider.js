import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import dataContext from './dataContext';
import { GetFoods, GetDrinks,
  GetCategorieDrinks, GetCategorieFoods } from '../helpers/apiDrink&Food';

function DataProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [catFoods, setCatFoods] = useState([]);
  const [catDrinks, setCatDrinks] = useState([]);
  const [cardContent, setCardContent] = useState([]);
  useEffect(() => {
    const ENDPOINT_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const ENDPOINT_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const getApiFoodDrink = async () => {
      const resultFood = await GetFoods(ENDPOINT_FOOD);
      const resultDrink = await GetDrinks(ENDPOINT_DRINK);
      const resultListCatDrinks = await GetCategorieDrinks();
      const resultListCatFoods = await GetCategorieFoods();
      setFoods(resultFood);
      setDrinks(resultDrink);
      setCatFoods(resultListCatFoods);
      setCatDrinks(resultListCatDrinks);
    };
    getApiFoodDrink();
  }, []);
  const contextValue = {
    foods,
    setFoods,
    drinks,
    setDrinks,
    catFoods,
    setCatFoods,
    catDrinks,
    setCatDrinks,
    cardContent,
    setCardContent,
  };

  return (
    <dataContext.Provider value={ contextValue }>
      { children }
    </dataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default DataProvider;
