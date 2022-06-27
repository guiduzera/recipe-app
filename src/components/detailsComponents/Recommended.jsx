import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function Recommended({ recommended, identificador }) {
  const mealThumb = identificador === 'drink' ? 'strMealThumb' : 'strDrinkThumb';
  const mealCategory = identificador === 'drink' ? 'strCategory' : 'strAlcoholic';
  const mealName = identificador === 'drink' ? 'strMeal' : 'strDrink';
  const mapeandoResposta = recommended.map((ele, index) => (
    <Card
      data-testid={ `${index}-recomendation-card` }
      key={ index }
      style={ { flex: 'none', marginRight: '15px' } }
      className="w-50 h-100"
    >
      <Card.Img
        variant="top"
        src={ ele[mealThumb] }
      />
      <Card.Body className="d-flex flex-column align-items-start">
        <span className="mt-n3 text-muted ml-n3">{ele[mealCategory]}</span>
        <Card.Title
          className="ml-n3"
          data-testid={ `${index}-recomendation-title` }
        >
          {ele[mealName]}

        </Card.Title>
      </Card.Body>
    </Card>
  ));
  return (
    <div className="p-2">
      <h3>Recommended</h3>
      <div className="d-flex" style={ { overflowX: 'auto' } }>
        {mapeandoResposta}
      </div>
    </div>
  );
}

Recommended.propTypes = {
  recommended: PropTypes.arrayOf(PropTypes.object).isRequired,
  identificador: PropTypes.string.isRequired,
};
