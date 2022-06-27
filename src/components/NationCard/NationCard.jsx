import React from 'react';
import propTypes from 'prop-types';
import './NationCard.css';

function NationCard(props) {
  const { img, name, index } = props;
  return (
    <section
      className="Card"
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ img }
        alt={ name }
        data-testid={ `${index}-card-img` }
      />
      <div className="boxName">
        <p data-testid={ `${index}-card-name` }>
          { name }
        </p>
      </div>
    </section>
  );
}

NationCard.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default NationCard;
