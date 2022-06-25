import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import IngredientCard from '../../../components/IngredientCard/IngredientCard';
import MenuInferior from '../../../components/menu inferior/MenuInferior';
import { fetchingExploreDrinksIngredients } from '../../../services/ExploreAPI';
import './ExploreDrinksBy.css';

const ExploreDrinksByIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsNames = await fetchingExploreDrinksIngredients();
      setIngredients(ingredientsNames);
      console.log(ingredientsNames);
    };
    fetchIngredients();
  }, []);

  return (
    <div>
      <Header />
      <section className="ExploreIngredientSection">
        { ingredients.map((e, index) => (
          <button
            type="button"
            key={ e }
            className="ExploreIngredientButton"
          >
            <IngredientCard
              name={ e }
              img={ `https://www.thecocktaildb.com/images/ingredients/${e}-Small.png` }
              index={ index }
            />
          </button>
        ))}
      </section>
      <MenuInferior />
    </div>
  );
};

export default ExploreDrinksByIngredients;
