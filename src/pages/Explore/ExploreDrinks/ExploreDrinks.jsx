import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import MenuInferior from '../../../components/menu inferior/MenuInferior';
import { fetchingRandomDrink } from '../../../services/DetailsApi';
import '../Explore.css';
import './ExploreDrinks.css';

function ExploreDrinks() {
  const history = useHistory();

  const redirectingExploreButton = ({ target }) => {
    history.push(`/explore/drinks/${target.name}`);
  };

  const redirectingSurpriseButton = async () => {
    const randomDrinkId = await fetchingRandomDrink();
    history.push(`/drinks/${randomDrinkId}`);
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
            className="ExploreDrinksByIngredients"
          >
            By Ingredient
          </Button>
          <Button
            data-testid="explore-surprise"
            onClick={ redirectingSurpriseButton }
            className="ExploreDrinksSurprise"
          >
            Surprise me!
          </Button>
        </section>
      </main>
      <MenuInferior />
    </div>
  );
}

export default ExploreDrinks;
