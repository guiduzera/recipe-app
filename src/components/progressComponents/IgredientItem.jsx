import React, { useState /* useEffect */ } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveRecipeProgress } from '../../helpers/localStorage';

function IgredientItem({ igredient, medida, index, name }) {
  const { id } = useParams();
  // const [clicou, setClicou] = useState(false);
  const [classChecked, setClassChecked] = useState('none');
  // const [itensRecipe, setItensRecipe] = useState([]);
  /* useEffect(() => {
    console.log(itensRecipe);
    if (clicou) {
      setClassChecked('line-through');
    } else {
      setClassChecked('none');
    }
  }, [clicou]); */

  const igredientSelected = () => {
    if (classChecked === 'line-through') {
      setClassChecked('none');
    } else {
      setClassChecked('line-through');
    }
    // const { value } = target;
    /* const listItens = [
      ...itensRecipe,
      value,
    ]; */
    saveRecipeProgress(id, index); // local storage
    /* console.log(value);
    if (value === igredient) {
      saveRecipeProgress(id, index); // local storage
      setClicou(true);
      setItensRecipe(listItens); // não deu certo
    } else {
      setClicou(false);
    } */

    return 'xablau';
  };

  return (
    <div data-testid={ `${index}-ingredient-step` }>
      <input
        type="checkbox"
        id="igredient"
        name="igredient"
        value={ name }
        onChange={ igredientSelected }
      />
      <label
        htmlFor="igredient"
        style={ { textDecoration: classChecked } }
      >
        <p
          key={ index }
          className="lh-sm"
          /* data-testid={ `${index}-ingredient-step` } */
        >
          {` ${igredient} - ${medida}`}

        </p>
      </label>
    </div>
  );
}

IgredientItem.propTypes = {
  igredient: PropTypes.string.isRequired,
  medida: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  // checked: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default IgredientItem;
