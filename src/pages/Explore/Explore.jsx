import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import './Explore.css';

function Explore() {
  return (
    <div className="BodyExplorePage">
      <Header />
      <main className="MainExplorePage">
        <section className="SectionExplorePage">
          <Button
            data-testid="explore-foods"
            className="ExploreFoodsButton"
          >
            Explore Foods
          </Button>
          <Button
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
