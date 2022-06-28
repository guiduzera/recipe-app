import React, { useState, useEffect } from 'react';
import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { getFavoriteRecipeFromLocalStorage,
  saveFavoriteRecipeToLocalStorage } from '../../helpers/localStorage';

export default function HeaderComponent(props) {
  const { strMealThumb, strMeal, strCategory, strId, strType,
    strArea, strAlcoholic, strLocalStorageCategory } = props;
  const WHITE_HEART = 'WHITE_HEART';
  const BLACK_HEART = 'BLACK_HEART';

  const [isCopie, setIsCopie] = useState(false);
  const [heartIcon, setHeartIcon] = useState({
    src: whiteHeartIcon,
    alt: WHITE_HEART,
  });

  const favoriteToLocalStorage = [{
    id: strId,
    type: strType,
    nationality: strArea,
    category: strLocalStorageCategory,
    alcoholicOrNot: strAlcoholic,
    name: strMeal,
    image: strMealThumb,
  }];

  console.log(favoriteToLocalStorage);

  const copied = (e) => {
    e.preventDefault();
    clipboardCopy(document.URL);
    setIsCopie(true);
  };

  const heartIconSwap = () => {
    switch (heartIcon.alt) {
    case WHITE_HEART:
      setHeartIcon({
        src: blackHeartIcon,
        alt: BLACK_HEART,
      });
      saveFavoriteRecipeToLocalStorage(favoriteToLocalStorage);
      break;

    default:
      setHeartIcon({
        src: whiteHeartIcon,
        alt: WHITE_HEART,
      });
      saveFavoriteRecipeToLocalStorage(favoriteToLocalStorage);
      break;
    }
  };

  useEffect(() => {
    const validation = getFavoriteRecipeFromLocalStorage(favoriteToLocalStorage);
    switch (validation) {
    case true:
      setHeartIcon({
        src: blackHeartIcon,
        alt: BLACK_HEART,
      });
      break;

    default:
      break;
    }
  }, []);

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
            src={ heartIcon.src }
            style={ { border: 'none', background: 'none' } }
            onClick={ heartIconSwap }
          >
            <img src={ heartIcon.src } alt={ heartIcon.alt } />
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
  strId: PropTypes.string.isRequired,
  strType: PropTypes.string.isRequired,
  strArea: PropTypes.string.isRequired,
  strAlcoholic: PropTypes.string.isRequired,
  strLocalStorageCategory: PropTypes.string.isRequired,
};
