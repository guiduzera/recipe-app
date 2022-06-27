import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

export default function HeaderComponent({ strMealThumb, strMeal, strCategory }) {
  const [isCopie, setIsCopie] = useState(false);
  const copied = (e) => {
    e.preventDefault();
    clipboardCopy(document.URL);
    setIsCopie(true);
  };

  return (
    <>
      <div
        className="h-25"
        // style={ {
        //   backgroundImage: `url(${strMealThumb})`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        // } }
      >
        <img
          src={ strMealThumb }
          alt="foto da receita"
          className="w-100 h-100"
          data-testid="recipe-photo"
        />
      </div>
      <div className="d-flex align-items-center p-2 justify-content-between">
        <div className="d-flex flex-column">
          <h1 data-testid="recipe-title" className="mt-n3">{strMeal}</h1>
          <span
            className="mt-n3 ml-1 text-muted"
            data-testid="recipe-category"
          >
            {strCategory}
          </span>
        </div>
        <div className="mb-5">
          <button
            type="button"
            data-testid="share-btn"
            src={ shareIcon }
            style={ { border: 'none', background: 'white' } }
            onClick={ copied }
          >
            <img src={ shareIcon } alt="icone de comparthilamento" />
          </button>
          {' '}
          <button
            type="button"
            data-testid="favorite-btn"
            src={ whiteHeartIcon }
            style={ { border: 'none', background: 'white' } }
          >
            <img src={ whiteHeartIcon } alt="coracao" />
          </button>
          {isCopie && <span>Link copied!</span>}
        </div>
      </div>
    </>
  );
}

HeaderComponent.propTypes = {
  strMealThumb: PropTypes.string.isRequired,
  strMeal: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
