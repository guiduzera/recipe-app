import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import dataContext from '../../context/dataContext';
import Card from '../../components/Card_Drink_or_Food/Card';
import ButtonCategories from '../../components/button_categories/ButtonCategories';
import { GetDrinks } from '../../helpers/apiDrink&Food';

function Drinks() {
  const { drinks, catDrinks } = useContext(dataContext);
  const history = useHistory();
  const [newList, setNewList] = useState(drinks);
  const [categorySelected, setCategorySelected] = useState('All');

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

  return (
    <div>
      <Header />
      <h1>Drinks</h1>
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
        {
          newList.map((drink, index) => (
            <div
              key={ drink.idDrink }
              onClick={ () => history.push(`/drinks/${drink.idDrink}`) }
              role="button"
              onKeyPress={ () => history.push(`/drinks/${drink.idDrink}`) }
              tabIndex={ index }
            >
              <Card
                img={ drink.strDrinkThumb }
                name={ drink.strDrink }
              />
            </div>
          ))
        }
      </section>
      <MenuInferior />
    </div>
  );
}

export default Drinks;
