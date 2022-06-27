/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import dataContext from '../context/dataContext';
import * as SearchBarApi from '../services/SearchBarApi';

export default function SearchBar() {
  const { location } = useHistory();
  const { setCardContent } = useContext(dataContext);
  const FirstLetter = 'First Letter';
  const [disable, setDisable] = useState(false);
  const [apiResult, setApiResult] = useState([]);
  const [searchBarState, setSearchBarState] = useState({
    searchRecipe: '',
    radioFilter: '',
  });

  const busca = searchBarState.searchRecipe;

  const handleChange = ({ target }) => {
    setDisable(false);
    const { name, value } = target;
    setSearchBarState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (apiResult.length !== 0) {
      const key = Object.keys(apiResult)[0];
      setCardContent(apiResult[key]);
    }
  }, [apiResult]);

  const ApiSearch = async (func, param) => {
    const resposta = await func(param);
    setApiResult(resposta);
  };

  const DrinkVerification = () => {
    if (searchBarState.radioFilter === 'Ingredient') {
      ApiSearch(SearchBarApi.fetchByIngredientDrink, busca);
    } else if (searchBarState.radioFilter === 'Name') {
      ApiSearch(SearchBarApi.fetchByNameDrink, busca);
    } else if (searchBarState.radioFilter === FirstLetter) {
      if (busca.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        ApiSearch(SearchBarApi.fetchByFirstLetterDrink, busca);
      }
    } else {
      setDisable(true);
    }
  };

  const handleClick = () => {
    if (location.pathname === '/foods') {
      if (searchBarState.radioFilter === 'Ingredient') {
        ApiSearch(SearchBarApi.fetchByIngredientFood, busca);
      } else if (searchBarState.radioFilter === 'Name') {
        ApiSearch(SearchBarApi.fetchByNameFood, busca);
      } else if (searchBarState.radioFilter === FirstLetter) {
        if (busca.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          ApiSearch(SearchBarApi.fetchByFirstLetterFood, busca);
        }
      } else {
        setDisable(true);
      }
    } else {
      DrinkVerification();
    }
  };

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Search Recipe"
        name="searchRecipe"
        value={ searchBarState.searchRecipe }
        onChange={ handleChange }
        data-testid="search-input"
        className="w-100 form-control"
      />
      <div>
        <label htmlFor="radio_ingredient">
          <input
            name="radioFilter"
            value="Ingredient"
            type="radio"
            id="radio_ingredient"
            data-testid="ingredient-search-radio"
            onChange={ handleChange }
          />
        </label>
        Ingredient
        <label htmlFor="radio_name" className="p-2">
          <input
            name="radioFilter"
            value="Name"
            type="radio"
            id="radio_name"
            data-testid="name-search-radio"
            onChange={ handleChange }
          />
          Name
        </label>
        <label htmlFor="radio_first_letter">
          <input
            name="radioFilter"
            value="First Letter"
            type="radio"
            id="radio_first_letter"
            data-testid="first-letter-search-radio"
            onChange={ handleChange }
          />
          First Letter
        </label>
      </div>
      <Button
        type="button"
        data-testid="exec-search-btn"
        variant="secondary"
        size="sm"
        onClick={ handleClick }
        disabled={ disable }
      >
        Search
      </Button>
    </div>
  );
}
