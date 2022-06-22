import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import dataContext from '../../context/dataContext';
import Card from '../../components/Card_Drink_or_Food/Card';
import './Foods.css';
import ButtonCategories from '../../components/button_categories/ButtonCategories';
import { GetFoods } from '../../helpers/apiDrink&Food';

function Foods() {
  const { foods, catFoods } = useContext(dataContext);
  const [newList, setNewList] = useState(foods);
  const [categorySelected, setCategorySelected] = useState('All');

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

  return (
    <div>
      <Header />
      <h1>Foods</h1>
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
        {
          newList.map((meal) => (
            <Card
              key={ meal.idMeal }
              img={ meal.strMealThumb }
              name={ meal.strMeal }
            />
          ))
        }
      </section>
      <MenuInferior />
    </div>
  );
}

export default Foods;
