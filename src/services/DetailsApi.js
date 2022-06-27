export const fetchFoodsDetails = async (identificador) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${identificador}`;
    const fetching = await fetch(url);
    const response = await fetching.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDrinksDetails = async (identificador) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${identificador}`;
    const fetchingDrinks = await fetch(url);
    const response = await fetchingDrinks.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const fetchRecommendedFoods = async () => {
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const fetchingRecommendedFoods = await fetch(url);
    const response = await fetchingRecommendedFoods.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const fetchRecommendedDrinks = async () => {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const fetchingRecommendedDrinks = await fetch(url);
    const response = await fetchingRecommendedDrinks.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const fetchingRandomFood = async () => {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const fetching = await fetch(url);
    const data = await fetching.json();
    const dataId = data.meals[0].idMeal;
    return dataId;
  } catch (error) {
    console.log(error);
  }
};

export const fetchingRandomDrink = async () => {
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const fetching = await fetch(url);
    const data = await fetching.json();
    const dataId = data.drinks[0].idDrink;
    return dataId;
  } catch (error) {
    console.log(error);
  }
};
