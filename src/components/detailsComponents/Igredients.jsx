import React from 'react';
import PropTypes from 'prop-types';

export default function Igredients({ recipe }) {
  const VINTE = 20;
  const igredients = [];
  for (let i = 1; i <= VINTE; i += 1) {
    if (!recipe[`strIngredient${i}`]) { break; }

    igredients.push({
      igredient: recipe[`strIngredient${i}`],
      medida: recipe[`strMeasure${i}`],
    });
  }
  return (
    <div className="p-2">
      <h3>Igredients</h3>
      <div className="p-2 rounded" style={ { background: 'lightgray' } }>
        {igredients.map((element, i) => (
          <p
            key={ i }
            className="lh-sm"
          >
            {`- ${element.igredient} - ${element.medida}`}

          </p>
        ))}
      </div>
    </div>
  );
}

Igredients.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};
