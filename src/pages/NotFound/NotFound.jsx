import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200414152441-disheslead.jpg"
        alt="dishes"
      />
      <p>Sorry, could not find your meal, we gotta wash the dishes first!</p>
      <Button
        type="button"
        onClick={ () => history.push('/foods') }
      >
        Dishes washed, back to cooking!!
      </Button>
    </div>
  );
}

export default NotFound;
