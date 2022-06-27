import React from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function CardSearch(props) {
  const { img, name, index } = props;
  return (
    <Card style={ { width: '18rem', marginBottom: '10px', height: '90%' } }>
      <div data-testid={ `${index}-recipe-card` } className="p-2">
        <Card.Img
          src={ img }
          alt={ name }
          data-testid={ `${index}-card-img` }
          variant="top"
        />
        <Card.Body className="boxName">
          <Card.Title data-testid={ `${index}-card-name` }>
            { name }
          </Card.Title>
        </Card.Body>
      </div>
    </Card>
  );
}

CardSearch.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default CardSearch;
