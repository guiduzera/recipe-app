import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import './ExploreFoods.css';

function ExploreFoods() {
  const history = useHistory();

  const redirectingExploreButton = ({ target }) => {
    history.push(`/explore/${target.name}`);
  };

  return (
    <div>
      <Header />
      <Button
        name="ingredients"
        data-testid="explore-by-ingredient"
        onClick={ redirectingExploreButton }
      >
        By Ingredient
      </Button>
      <Button
        name="nationalities"
        data-testid="explore-by-nationality"
        onClick={ redirectingExploreButton }
      >
        By Nationality
      </Button>
      <Button
        data-testid="explore-surprise"
      >
        Surprise me!
      </Button>
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
