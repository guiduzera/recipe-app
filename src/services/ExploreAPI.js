export const fetchingExploreFoodsIngredients = async () => {
  const MAXIMUM_INGREDIENTS = 11;
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const fetching = await fetch(url);
    const data = await fetching.json();
    const filtering = data.meals.filter((ingredient, index) => (
      index <= MAXIMUM_INGREDIENTS
    ));
    const ingredients = filtering.map((ingredient) => (
      ingredient.strIngredient
    ));
    return ingredients;
  } catch (error) {
    console.log(error);
  }
};

export const fetchingExploreDrinksIngredients = async () => {
  const MAXIMUM_INGREDIENTS = 11;
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const fetching = await fetch(url);
    const data = await fetching.json();
    const filtering = data.drinks.filter((ingredient, index) => (
      index <= MAXIMUM_INGREDIENTS
    ));
    const ingredients = filtering.map((ingredient) => (
      ingredient.strIngredient1
    ));
    return ingredients;
  } catch (error) {
    console.log(error);
  }
};

export const fetchingExploreFoodsNationalities = async () => {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const fetching = await fetch(url);
    const { meals } = await fetching.json();
    const result = meals.map((nation) => (
      nation.strArea
    ));
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchingNationalityFoods = async (nation) => {
  const MAXIMUM_NATIONAL_FOODS = 11;
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`;
    const fetching = await fetch(url);
    const { meals } = await fetching.json();
    const filtering = meals.filter((_meal, index) => (
      index <= MAXIMUM_NATIONAL_FOODS
    ));
    return filtering;
  } catch (error) {
    console.log(error);
  }
};
