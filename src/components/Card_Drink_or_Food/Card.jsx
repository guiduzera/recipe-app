import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const { img, name, index } = props;
  return (
    <div
      className="Card"
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ img }
        alt={ name }
      />
      <div className="boxName">
        <p data-testid={ `${index}-card-name` }>
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
