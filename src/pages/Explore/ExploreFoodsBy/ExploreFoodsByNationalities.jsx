import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import MenuInferior from '../../../components/menu inferior/MenuInferior';
import NationCard from '../../../components/NationCard/NationCard';
import { GetFoods } from '../../../helpers/apiDrink&Food';
import { fetchingExploreFoodsNationalities,
  fetchingNationalityFoods } from '../../../services/ExploreAPI';
import './ExploreFoodsBy.css';

function ExploreFoodsByNationalities() {
  const history = useHistory();
  const [nations, setNations] = useState(['All']);
  const [selectedNation, setSelectedNation] = useState('All');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getNations = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const gettingNations = await fetchingExploreFoodsNationalities();
      const gettingAllFoods = await GetFoods(URL);
      setNations((previous) => ([
        ...previous,
        ...gettingNations,
      ]));
      setMeals(gettingAllFoods);
    };
    getNations();
  }, []);

  useEffect(() => {
    const getNationalMeals = async () => {
      const gettingNationalMeals = await fetchingNationalityFoods(selectedNation);
      setMeals(gettingNationalMeals);
    };
    const getAllMeals = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const gettingAllMeals = await GetFoods(URL);
      setMeals(gettingAllMeals);
    };
    switch (selectedNation) {
    case 'All':
      getAllMeals();
      break;

    default:
      getNationalMeals();
      break;
    }
  }, [selectedNation]);

  const handleNationSelect = ({ target }) => {
    const { value } = target;
    setSelectedNation(value);
  };

  return (
    <div>
      <Header />
      <section className="contanierButtons">
        <select
          name="selectedNation"
          value={ selectedNation }
          onChange={ handleNationSelect }
          data-testid="explore-by-nationality-dropdown"
        >
          { nations.map((e) => (
            <option
              key={ e }
              value={ e }
              data-testid={ `${e}-option` }
            >
              { e }
            </option>
          ))}
        </select>
      </section>
      <section className="ExploreIngredientSection">
        { meals && meals.map((e, index) => (
          <button
            type="button"
            key={ e.idMeal }
            onClick={ () => history.push(`/foods/${e.idMeal}`) }
            className="ExploreIngredientButton"
          >
            <NationCard
              img={ e.strMealThumb }
              name={ e.strMeal }
              index={ index }
            />
          </button>
        ))}
      </section>
      <MenuInferior />
    </div>
  );
}

export default ExploreFoodsByNationalities;
