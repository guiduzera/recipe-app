import React from 'react';
import propTypes from 'prop-types';
import './ButtonCategories.css';

function ButtonCategories(props) {
  const { name, onClick } = props;
  return (
    <button
      className="buttonCat"
      type="button"
      data-testid={ `${name}-category-filter` }
      onClick={ onClick }
    >
      { name }
    </button>
  );
}

ButtonCategories.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ButtonCategories;
