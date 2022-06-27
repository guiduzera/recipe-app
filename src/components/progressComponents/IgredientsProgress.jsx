import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IgredientItem from './IgredientItem';

export default function IgredientsProgress({ recipe, parentCallback }) {
  const [listIgredSelected, setListIgredSelected] = useState([]);
  const [btnDesabled, setBtnDesabled] = useState(true);
  const VINTE = 20;
  const igredients = [];
  for (let i = 1; i <= VINTE; i += 1) {
    if (!recipe[`strIngredient${i}`]) { break; }

    igredients.push({
      igredient: recipe[`strIngredient${i}`],
      medida: recipe[`strMeasure${i}`],
    });
  }

  useEffect(() => {
    if (igredients.length === listIgredSelected.length) {
      setBtnDesabled(false);
      parentCallback(btnDesabled);
    }
  }, [listIgredSelected]);

  const clickIgred = ({ target }) => {
    const { value } = target;
    const arrayIgredSelected = [
      ...listIgredSelected,
      value,
    ];
    setListIgredSelected(arrayIgredSelected);
  };

  return (
    <div className="p-2">
      <h3>Igredients</h3>
      <form onChange={ clickIgred }>
        <div className="p-2 rounded" style={ { background: 'lightgray' } }>
          {igredients.map((element, i) => (
            <>
              <IgredientItem
                igredient={ element.igredient }
                medida={ element.medida }
                index={ i }
                name={ element.igredient }
              />
              <br />
            </>
          ))}
        </div>
      </form>
    </div>
  );
}

IgredientsProgress.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  parentCallback: PropTypes.func.isRequired,
};
