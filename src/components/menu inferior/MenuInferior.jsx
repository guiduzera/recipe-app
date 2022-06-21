import React from 'react';
// import PropTypes from 'prop-types';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './MenuInferior.css';

function MenuInferior() {
  const redirect = (caminho) => console.log(caminho); /* history.push(caminho); */

  return (
    <footer data-testid="footer" className="menuInferior">
      <button
        data-testid="drinks-bottom-btn"
        type="button"
        onClick={ () => redirect('/drinks') }
      >
        <img src={ drinkIcon } alt="taça de bebida" />
      </button>
      <button
        data-testid="explore-bottom-btn"
        type="button"
        onClick={ () => redirect('/explore') }
      >
        <img src={ exploreIcon } alt="bussola" />
      </button>
      <button
        data-testid="food-bottom-btn"
        type="button"
        onClick={ () => redirect('/foods') }
      >
        <img src={ mealIcon } alt="garfo e faca" />
      </button>
    </footer>
  );
}

/* MenuInferior.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}; */

export default MenuInferior;
