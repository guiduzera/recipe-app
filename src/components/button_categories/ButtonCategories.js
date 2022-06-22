import React from 'react';
import propTypes from 'prop-types';
import './ButtonCategories.css';

function ButtonCategories(props) {
  const { name, func } = props;
  return (
    <button
      className="buttonCat"
      type="button"
      data-testid={ `${name}-category-filter` }
      onClick={ func }
    >
      { name }
    </button>
  );
}

ButtonCategories.propTypes = {
  name: propTypes.string.isRequired,
  func: propTypes.func.isRequired,
};

export default ButtonCategories;
