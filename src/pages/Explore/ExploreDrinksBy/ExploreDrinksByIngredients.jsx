import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    };
    fetchIngredients();
  }, []);

  return (
    <div>
      <Header />
      <section className="ExploreIngredientSection">
        { ingredients.map((e, index) => (
          <Link
            key={ e }
            className="ExploreIngredientButton"
            data-testid="product-detail-link"
            to={ {
              pathname: '/drinks',
              state: { e },
            } }
          >
            <IngredientCard
              name={ e }
              img={ `https://www.thecocktaildb.com/images/ingredients/${e}-Small.png` }
              index={ index }
            />
          </Link>
        ))}
      </section>
      <MenuInferior />
    </div>
  );
};

export default ExploreDrinksByIngredients;
