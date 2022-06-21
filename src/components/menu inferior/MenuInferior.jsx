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
      <object
        role="button"
        tabIndex={ 0 }
        onClick={ () => redirect('/drinks') }
        onKeyDown={ () => { redirect('/drinks'); } }
        data-testid="drinks-bottom-btn"
        className="drinKIcon"
        type="image/svg+xml"
        data={ drinkIcon }
      >
        Drink
      </object>
      <object
        role="button"
        tabIndex={ 0 }
        onClick={ () => redirect('/explore') }
        onKeyUp={ () => { redirect('/explore'); } }
        data-testid="explore-bottom-btn"
        className="exploreIcon"
        type="image/svg+xml"
        data={ exploreIcon }
      >
        Explore
      </object>
      <object
        role="button"
        tabIndex={ 0 }
        onClick={ () => redirect('/foods') }
        onKeyPress={ () => { redirect('/foods'); } }
        data-testid="food-bottom-btn"
        className="mealIcon"
        type="image/svg+xml"
        data={ mealIcon }
      >
        Meal
      </object>
    </footer>
  );
}

/* MenuInferior.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}; */

export default MenuInferior;
