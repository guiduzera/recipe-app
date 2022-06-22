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
