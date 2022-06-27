import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ButtonFinish({ btnDisabled }) {
  const history = useHistory();
  return (
    <div className="fixed-bottom">
      <Button
        variant="primary"
        size="lg"
        className="w-100"
        data-testid="finish-recipe-btn"
        disabled={ btnDisabled }
        onClick={ () => history.push('/done-recipes') }
      >
        Finalizar
      </Button>
    </div>
  );
}

ButtonFinish.propTypes = {
  btnDisabled: PropTypes.bool.isRequired,
};

export default ButtonFinish;
