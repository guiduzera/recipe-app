/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import dataContext from '../../context/dataContext';
import Card from '../../components/Card_Drink_or_Food/Card';
import './Foods.css';
import ButtonCategories from '../../components/button_categories/ButtonCategories';
import { GetFoods } from '../../helpers/apiDrink&Food';
import CardSearch from '../../components/Cardsearch';

function Foods() {
  const history = useHistory();
  const { foods, setFoods, catFoods,
    cardContent, setCardContent } = useContext(dataContext);
  const [newList, setNewList] = useState(foods);
  const [categorySelected, setCategorySelected] = useState('All');
  const [searchState, setSearchState] = useState([]);

  useEffect(() => {
    const getAPIFoods = async () => {
      const ENDPOINT_FOOD = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const result = await GetFoods(ENDPOINT_FOOD);
      setFoods(result);
      setNewList(result);
    };
    getAPIFoods();
  }, []);

  useEffect(() => {
    if (cardContent === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (cardContent.length === 1) {
      history.push(`/foods/${cardContent[0].idMeal}`);
      setCardContent([]);
    } else {
      const SEIS = 6;
      const filtro = cardContent.filter((ele, index) => index < SEIS);
      setSearchState(filtro);
    }
  }, [cardContent]);

  const filterMeals = async (value) => {
    if (categorySelected === value || value === 'All') {
      setNewList(foods);
      setCategorySelected('All');
    } else {
      const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
      const listFilter = await GetFoods(ENDPOINT);
      setNewList(listFilter);
      setCategorySelected(value);
    }
    return value;
  };

  const cardsRendering = () => {
    if (searchState.length === 0) {
      const alou = newList.map((meal, index) => (
        <div
          key={ meal.idMeal }
          onClick={ () => history.push(`/foods/${meal.idMeal}`) }
          role="button"
          onKeyPress={ () => history.push(`/foods/${meal.idMeal}`) }
          data-testid={ `${index}-recipe-card` }
          tabIndex={ index }
        >
          <Card
            img={ meal.strMealThumb }
            name={ meal.strMeal }
            index={ index }
          />
        </div>
      ));
      return alou;
    }
    if (searchState.length > 0) {
      const mapa = searchState.map((meal, index) => (
        <div
          key={ meal.idMeal }
          onClick={ () => history.push(`/foods/${meal.idMeal}`) }
          role="button"
          onKeyPress={ () => history.push(`/foods/${meal.idMeal}`) }
          tabIndex={ index }
        >
          <CardSearch
            img={ meal.strMealThumb }
            name={ meal.strMeal }
            index={ index }
          />
        </div>
      ));
      return mapa;
    }
  };

  return (
    <div>
      <Header />
      <h1 className="p-2">Foods</h1>
      <section className="contanierButtons">
        <button
          className="buttonCat"
          type="button"
          data-testid="All-category-filter"
          onClick={ () => { filterMeals('All'); } }
        >
          All
        </button>
        {
          catFoods.map((category) => (
            <ButtonCategories
              key={ category.strCategory }
              name={ category.strCategory }
              onClick={ () => { filterMeals(category.strCategory); } }
            />
          ))
        }
      </section>
      <section className="contanierCards">
        {cardsRendering()}
      </section>
      <MenuInferior />
    </div>
  );
}

export default Foods;
