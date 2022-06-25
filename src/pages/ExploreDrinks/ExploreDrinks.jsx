import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import './ExploreDrinks.css';

function ExploreDrinks() {
  const history = useHistory();

  const redirectingExploreButton = ({ target }) => {
    history.push(`/explore/${target.name}`);
  };
  
  return (
    <div>
      <Header />
      <p>A</p>
      <MenuInferior />
    </div>
  );
}

export default ExploreDrinks;
