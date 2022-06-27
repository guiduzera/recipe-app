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
