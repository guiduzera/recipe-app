import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import MenuInferior from '../../../components/menu inferior/MenuInferior';
import { fetchingRandomFood } from '../../../services/DetailsApi';
import '../Explore.css';
import './ExploreFoods.css';

function ExploreFoods() {
  const history = useHistory();

  const redirectingExploreButton = ({ target }) => {
    history.push(`/explore/foods/${target.name}`);
  };

  const redirectingSurpriseButton = async () => {
    const randomFoodId = await fetchingRandomFood();
    history.push(`/foods/${randomFoodId}`);
  };

  return (
    <div className="BodyExplorePage">
      <Header />
      <main className="MainExplorePage">
        <section className="SectionExplorePage">
          <Button
            name="ingredients"
            data-testid="explore-by-ingredient"
            onClick={ redirectingExploreButton }
            className="ExploreFoodsByIngredients"
          >
            By Ingredient
          </Button>
          <Button
            name="nationalities"
            data-testid="explore-by-nationality"
            onClick={ redirectingExploreButton }
            className="ExploreFoodsByNationalities"
          >
            By Nationality
          </Button>
          <Button
            data-testid="explore-surprise"
            onClick={ redirectingSurpriseButton }
            className="ExploreFoodsSurprise"
          >
            Surprise me!
          </Button>
        </section>
      </main>
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
