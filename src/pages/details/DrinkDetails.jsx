/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ButtonDetail from '../../components/detailsComponents/ButtonDetail';
import HeaderComponent from '../../components/detailsComponents/HeaderComponent';
import Igredients from '../../components/detailsComponents/Igredients';
import Instructions from '../../components/detailsComponents/Instructions';
import Recommended from '../../components/detailsComponents/Recommended';
import { fetchDrinksDetails, fetchRecommendedDrinks } from '../../services/DetailsApi';

export default function DrinkDetails() {
  const history = useHistory();
  const [drinkRecipe, setDrinkRecipe] = useState([]);
  const [recommendDrink, setRecommendDrink] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const executeFetch = async () => {
      const SEIS = 6;
      const responseApi = await fetchDrinksDetails(id);
      const responseDrinksRecommend = await fetchRecommendedDrinks();
      const filteredRecommended = responseDrinksRecommend.meals.filter(
        (_drinks, index) => index < SEIS,
      );
      setDrinkRecipe(responseApi.drinks[0]);
      setRecommendDrink(filteredRecommended);
    };
    executeFetch();
  }, []);

  if (drinkRecipe.length === 0) {
    return (
      <span>carregando</span>
    );
  }
  return (
    <div className="vh-100">
      <HeaderComponent
        strMealThumb={ drinkRecipe.strDrinkThumb }
        strMeal={ drinkRecipe.strDrink }
        strCategory={ drinkRecipe.strAlcoholic }
        strLocalStorageCategory={ drinkRecipe.strCategory }
        strId={ id }
        strType="drink"
        strAlcoholic={ drinkRecipe.strAlcoholic }
        strArea=""
      />
      <Igredients recipe={ drinkRecipe } />
      <Instructions strInstructions={ drinkRecipe.strInstructions } />
      <Recommended recommended={ recommendDrink } identificador="drink" />
      <br />
      <br />
      <ButtonDetail
        onClick={ () => history.push(`/drinks/${drinkRecipe.idDrink}/in-progress`) }
      />
    </div>
  );
}
