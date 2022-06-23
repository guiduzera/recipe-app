import React from 'react';
import PropTypes from 'prop-types';

export default function Instructions({ strInstructions }) {
  return (
    <div className="pl-4 pr-2 ml-n3">
      <h3 className="">Instructions</h3>
      <p
        style={ { background: 'lightgray' } }
        className="p-2 text-justify rounded"
        data-testid="instructions"
      >
        {strInstructions}
      </p>
    </div>
  );
}

Instructions.propTypes = {
  strInstructions: PropTypes.string.isRequired,
};
