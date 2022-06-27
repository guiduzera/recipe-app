import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default function ButtonDetail({ onClick }) {
  return (
    <div className="fixed-bottom">
      <Button
        variant="primary"
        size="lg"
        data-testid="start-recipe-btn"
        className="w-100"
        onClick={ onClick }
      >
        Start Recipe

      </Button>
    </div>
  );
}

ButtonDetail.propTypes = {
  onClick: PropTypes.func.isRequired,
};
