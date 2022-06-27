import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import IngredientCard from '../../../components/IngredientCard/IngredientCard';
import MenuInferior from '../../../components/menu inferior/MenuInferior';
import { fetchingExploreFoodsIngredients } from '../../../services/ExploreAPI';
import './ExploreFoodsBy.css';

const ExploreFoodsByIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsNames = await fetchingExploreFoodsIngredients();
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
          <Link
            key={ e }
            className="ExploreIngredientButton"
            data-testid="product-detail-link"
            to={ {
              pathname: '/foods/',
              state: { e },
            } }
          >
            <IngredientCard
              name={ e }
              img={ `https://www.themealdb.com/images/ingredients/${e}-Small.png` }
              index={ index }
            />
          </Link>
        ))}
      </section>
      <MenuInferior />
    </div>
  );
};

export default ExploreFoodsByIngredients;
