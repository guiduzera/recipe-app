import React from 'react';
import propTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const { img, name } = props;
  return (
    <div className="Card">
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
};

export default Card;
