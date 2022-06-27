import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const { img, name, index } = props;
  return (
    <div
      className="Card"
      data-testid={ `${index}-recipe-card` }
    >
      <img src={ img } alt={ name } />
      <div className="boxName">
        <p>
          { name }
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default Card;
