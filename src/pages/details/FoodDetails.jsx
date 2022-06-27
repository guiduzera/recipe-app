/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ButtonDetail from '../../components/detailsComponents/ButtonDetail';
import HeaderComponent from '../../components/detailsComponents/HeaderComponent';
import Igredients from '../../components/detailsComponents/Igredients';
import Instructions from '../../components/detailsComponents/Instructions';
import Recommended from '../../components/detailsComponents/Recommended';
import { fetchFoodsDetails, fetchRecommendedFoods } from '../../services/DetailsApi';

export default function FoodDetails() {
  const history = useHistory();
  const [recipe, setrecipe] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const executeFetch = async () => {
      const SEIS = 6;
      const responseApi = await fetchFoodsDetails(id);
      const responseApiRecommended = await fetchRecommendedFoods();
      const filteredRecommended = responseApiRecommended.drinks.filter(
        (_drinks, index) => index < SEIS,
      );
      setRecommended(filteredRecommended);
      setrecipe(responseApi.meals[0]);
    };
    executeFetch();
  }, []);
  if (recipe.length === 0) {
    return (
      <span>carregando...</span>
    );
  }
  const ytUrl = recipe.strYoutube.split('=');
  const idDoVideo = ytUrl[1];
  return (
    <div className="vh-100">
      <HeaderComponent
        strMealThumb={ recipe.strMealThumb }
        strMeal={ recipe.strMeal }
        strCategory={ recipe.strCategory }
      />
      <Igredients recipe={ recipe } />
      <Instructions strInstructions={ recipe.strInstructions } />
      <div className="p-2">
        <h3>Video</h3>
        <iframe width="325" height="315" src={ `https://www.youtube.com/embed/${idDoVideo}` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-testid="video" />
      </div>
      <Recommended recommended={ recommended } identificador="food" />
      <br />
      <br />
      <ButtonDetail
        onClick={ () => history.push(`/foods/${recipe.idMeal}/in-progress`) }
      />
    </div>
  );
}
