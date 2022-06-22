import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import dataContext from '../../context/dataContext';
import Card from '../../components/Card_Drink_or_Food/Card';
import './Foods.css';
import ButtonCategories from '../../components/button_categories/ButtonCategories';
// import { GetFoods } from '../../helpers/apiDrink&Food';
// import { useState } from 'react';

function Foods() {
  const { foods, catFoods } = useContext(dataContext);
  /* // const [state, setState] = useState('');
  const filterCategorieFood = async (category) => {
    const ENDPOINT = `www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    // const DOZE = 12;
    // const results = await fetch(ENDPOINT).then((response) => response.json());
    // const listMeals = results.meals.filter((_meals, index) => index < DOZE);
    const a = await GetFoods(ENDPOINT);
    console.log(a);
    // setFoods(listFilter);
  }; */
  return (
    <div>
      <Header />
      <h1>Foods</h1>
      <section className="contanierButtons">
        {
          catFoods.map((category) => (
            <ButtonCategories
              key={ category.strCategory }
              name={ category.strCategory }
              /* func={ () => filterCategorieFood(category.strCategory) } */
            />
          ))
        }
      </section>
      <section className="contanierCards">
        {
          foods.map((meal) => (
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
