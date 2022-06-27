import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import './Explore.css';

function Explore() {
  const history = useHistory();

  const redirectingExploreButton = ({ target }) => {
    history.push(`/explore/${target.name}`);
  };

  return (
    <div className="BodyExplorePage">
      <Header />
      <main className="MainExplorePage">
        <section className="SectionExplorePage">
          <Button
            name="foods"
            type="button"
            onClick={ redirectingExploreButton }
            data-testid="explore-foods"
            className="ExploreFoodsButton"
          >
            Explore Foods
          </Button>
          <Button
            name="drinks"
            type="button"
            onClick={ redirectingExploreButton }
            data-testid="explore-drinks"
            className="ExploreDrinksButton"
          >
            Explore Drinks
          </Button>
        </section>
      </main>
      <MenuInferior />
    </div>
  );
}

export default Explore;
