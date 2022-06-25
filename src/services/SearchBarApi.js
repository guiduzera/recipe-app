export const fetchByIngredientFood = async (ingredient) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const fetching = await fetch(url);
    const data = await fetching.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByNameFood = async (nome) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;
    const pegandoName = await fetch(url);
    const promise = await pegandoName.json();
    return promise;
  } catch (e) {
    console.log(e);
  }
};

export const fetchByFirstLetterFood = async (fL) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${fL}`;
    const pegandoLetter = await fetch(url);
    const promise = await pegandoLetter.json();
    return promise;
  } catch (e) {
    console.log(e);
  }
};

export const fetchByIngredientDrink = async (ingredient) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const fetching = await fetch(url);
    const data = await fetching.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByNameDrink = async (nome) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`;
    const pegandoNameDrink = await fetch(url);
    const promise = await pegandoNameDrink.json();
    return promise;
  } catch (e) {
    console.log(e);
  }
};

export const fetchByFirstLetterDrink = async (fL) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${fL}`;
    const pegandoLetterDrink = await fetch(url);
    const promise = await pegandoLetterDrink.json();
    return promise;
  } catch (e) {
    console.log(e);
  }
};
