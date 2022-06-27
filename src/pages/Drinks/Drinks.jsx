/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import dataContext from '../../context/dataContext';
import Card from '../../components/Card_Drink_or_Food/Card';
import ButtonCategories from '../../components/button_categories/ButtonCategories';
import { GetDrinks } from '../../helpers/apiDrink&Food';
import CardSearch from '../../components/Cardsearch';

function Drinks() {
  const { drinks, catDrinks, cardContent, setCardContent } = useContext(dataContext);
  const history = useHistory();
  const [newList, setNewList] = useState(drinks);
  const [categorySelected, setCategorySelected] = useState('All');
  const [searchState, setSearchState] = useState([]);

  useEffect(() => {
    if (cardContent === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (cardContent.length === 1) {
      history.push(`/drinks/${cardContent[0].idDrink}`);
      setCardContent([]);
    } else {
      const SEIS = 6;
      const filtro = cardContent.filter((ele, index) => index < SEIS);
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

  const cardsRendering = () => {
    if (searchState.length === 0) {
      const alou = newList.map((meal, index) => (
        <div
          key={ meal.idDrink }
          onClick={ () => history.push(`/drinks/${meal.idDrink}`) }
          role="button"
          onKeyPress={ () => history.push(`/drinks/${meal.idDrink}`) }
          tabIndex={ index }
        >
          <Card
            img={ meal.strDrinkThumb }
            name={ meal.strDrink }
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

export default Drinks;
