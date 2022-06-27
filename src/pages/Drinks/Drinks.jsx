/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import dataContext from '../../context/dataContext';
import Card from '../../components/Card_Drink_or_Food/Card';
import ButtonCategories from '../../components/button_categories/ButtonCategories';
import { GetDrinks } from '../../helpers/apiDrink&Food';
import CardSearch from '../../components/Cardsearch';

function Drinks(props) {
  const { drinks, setDrinks, catDrinks,
    cardContent, setCardContent } = useContext(dataContext);
  const history = useHistory();
  const [newList, setNewList] = useState(drinks);
  const [categorySelected, setCategorySelected] = useState('All');
  const [searchState, setSearchState] = useState([]);

  useEffect(() => {
    const getAPIDrinks = async () => {
      const ENDPOINT_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const result = await GetDrinks(ENDPOINT_DRINK);
      setDrinks(result);
      setNewList(result);
    };
    getAPIDrinks();
  }, []);

  useEffect(() => {
    if (cardContent === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (cardContent.length === 1) {
      history.push(`/drinks/${cardContent[0].idDrink}`);
      setCardContent([]);
    } else {
      const DOZE = 12;
      const filtro = cardContent.filter((ele, index) => index < DOZE);
      setSearchState(filtro);
    }
  }, [cardContent]);

  const filterDrinks = async (value) => {
    if (categorySelected === value || value === 'All') {
      setNewList(drinks);
    } else {
      const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`;
      const listFilter = await GetDrinks(ENDPOINT);
      setNewList(listFilter);
      setCategorySelected(value);
    }
    return value;
  };

  useEffect(() => {
    const getFromExplore = async (value) => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`;
      const result = await GetDrinks(URL);
      setNewList(result);
      setCategorySelected(value);
    };
    const { location } = props;
    const validation = !location.state;
    switch (validation) {
    case false:
      getFromExplore(location.state.e);
      break;

    default:
      break;
    }
  }, [props]);

  const cardsRendering = () => {
    if (searchState.length === 0) {
      const alou = newList.map((meal, index) => (
        <div
          key={ meal.idDrink }
          onClick={ () => history.push(`/drinks/${meal.idDrink}`) }
          role="button"
          onKeyPress={ () => history.push(`/drinks/${meal.idDrink}`) }
          data-testid={ `${index}-recipe-card` }
          tabIndex={ index }
        >
          <Card
            img={ meal.strDrinkThumb }
            name={ meal.strDrink }
            index={ index }
          />
        </div>
      ));
      return alou;
    }
    if (searchState.length > 0) {
      const mapa = searchState.map((meal, index) => (
        <div
          key={ meal.idDrink }
          onClick={ () => history.push(`/drinks/${meal.idDrink}`) }
          role="button"
          onKeyPress={ () => history.push(`/drinks/${meal.idDrink}`) }
          tabIndex={ index }
        >
          <CardSearch
            img={ meal.strDrinkThumb }
            name={ meal.strDrink }
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
      <h1 className="p-2">Drinks</h1>
      <section className="contanierButtons">
        <button
          className="buttonCat"
          type="button"
          data-testid="All-category-filter"
          onClick={ () => { filterDrinks('All'); } }
        >
          All
        </button>
        {
          catDrinks.map((category) => (
            <ButtonCategories
              key={ category.strCategory }
              name={ category.strCategory }
              onClick={ () => { filterDrinks(category.strCategory); } }
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

Drinks.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Drinks;
