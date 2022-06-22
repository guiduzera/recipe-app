export const GetFoods = async (endpoint) => {
  const DOZE = 12;
  const results = await fetch(endpoint).then((response) => response.json());
  const listMeals = await results.meals.filter((_meals, index) => index < DOZE);
  return listMeals;
};

export const GetDrinks = async (endpoint) => {
  const DOZE = 12;
  const resultsDrinks = await fetch(endpoint).then((response) => response.json());
  const listDrinks = resultsDrinks.drinks.filter((_drinks, index) => index < DOZE);
  return listDrinks;
};

export const GetCategorieDrinks = async () => {
  const CINCO = 5;
  const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const results = await fetch(ENDPOINT).then((response) => response.json());
  const listCatDrinks = results.drinks.filter((_drinks, index) => index < CINCO);
  return listCatDrinks;
};

export const GetCategorieFoods = async () => {
  const CINCO = 5;
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const results = await fetch(ENDPOINT).then((response) => response.json());
  const listCatMeals = results.meals.filter((_meals, index) => index < CINCO);
  return listCatMeals;
};
