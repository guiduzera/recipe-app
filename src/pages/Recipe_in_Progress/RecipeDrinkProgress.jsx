import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from '../../components/detailsComponents/HeaderComponent';
import ButtonFinish from '../../components/progressComponents/ButtonFinish';
import Instructions from '../../components/detailsComponents/Instructions';
import { fetchDrinksDetails } from '../../services/DetailsApi';
import IgredientsProgress from '../../components/progressComponents/IgredientsProgress';

function RecipeDrinkProgress() {
  const [recipe, setRecipe] = useState([]);
  const [stateBtn, setStateBtn] = useState(true);
  // const [checked, setChecked] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const executeFetch = async () => {
      const responseApi = await fetchDrinksDetails(id);
      setRecipe(responseApi.drinks[0]);
    };
    executeFetch();
  }, []);

  const funcBtn = (value) => {
    setStateBtn(value);
  };

  /* const igredientSelected = () => {
    setChecked(true); */
  /* const s = 'line-through';
    if (target.checked === true) {
      setCheckedClass(s);
    } else {
      setCheckedClass('');
    } */
  /*  console.log('selecionou');
  }; */

  return (
    <section className="vh-100">
      <HeaderComponent
        strMealThumb={ recipe.strDrinkThumb }
        strMeal={ recipe.strDrink }
        strCategory={ recipe.strCategory }
      />
      <IgredientsProgress
        recipe={ recipe }
        parentCallback={ funcBtn }
      />
      <Instructions
        strInstructions={ recipe.strInstructions }
      />
      <br />
      <br />
      <ButtonFinish
        btnDisabled={ stateBtn }
      />
    </section>
  );
}

export default RecipeDrinkProgress;
