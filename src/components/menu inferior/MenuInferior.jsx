import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import dataContext from '../../context/dataContext';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './MenuInferior.css';

function MenuInferior() {
  const history = useHistory();
  const { setCardContent } = useContext(dataContext);
  const redirect = (caminho) => history.push(caminho);

  return (
    <footer data-testid="footer" className="menuInferior">
      <button
        data-testid="drinks-bottom-btn"
        type="button"
        src={ drinkIcon }
        onClick={ () => {
          setCardContent([]);
          redirect('/drinks');
        } }
      >
        <img src={ drinkIcon } alt="taça de bebida" />
      </button>
      <button
        data-testid="explore-bottom-btn"
        type="button"
        src={ exploreIcon }
        onClick={ () => {
          setCardContent([]);
          redirect('/explore');
        } }
      >
        <img src={ exploreIcon } alt="bussola" />
      </button>
      <button
        data-testid="food-bottom-btn"
        type="button"
        src={ mealIcon }
        onClick={ () => {
          setCardContent([]);
          redirect('/foods');
        } }
      >
        <img src={ mealIcon } alt="garfo e faca" />
      </button>
    </footer>
  );
}

export default MenuInferior;
