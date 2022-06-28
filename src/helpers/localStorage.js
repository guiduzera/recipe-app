const saveEmailToLocalStorage = (email) => {
  const user = {
    email,
  };
  localStorage.setItem('user', JSON.stringify(user));
};

const saveMealsTokenToLocalStorage = (value) => {
  localStorage.setItem('mealsToken', value);
};

const saveCocktailsTokenToLocalStorage = (value) => {
  localStorage.setItem('cocktailsToken', value);
};

// Rceitas em progresso
const saveRecipeProgress = (id, itens) => {
  /* const xablau = localStorage.getItem('inProgressRecipes');
  console.log(xablau); */
  const recipe = {
    meals: {
      [id]: itens,
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(recipe));
};

const saveFavoriteRecipeToLocalStorage = (value) => {
  const itemRetrieval = JSON.parse(localStorage.getItem('favoriteRecipes'));

  if (itemRetrieval !== null) {
    const validation = itemRetrieval.some((e) => e.id === value[0].id);

    switch (validation) {
    case true:
      localStorage.setItem('favoriteRecipes', JSON.stringify(itemRetrieval
        .filter((e) => (e.id !== value[0].id))));
      console.log('foi');
      break;

    case false:
      localStorage.setItem('favoriteRecipes', JSON.stringify([
        ...itemRetrieval,
        ...value,
      ]));
      console.log('nn foi');
      break;

    default:
      break;
    }
  }
  if (itemRetrieval === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify(value));
  }
};

const getFavoriteRecipeFromLocalStorage = (value) => {
  const itemRetrieval = JSON.parse(localStorage.getItem('favoriteRecipes'));
  switch (!itemRetrieval) {
  case false:
    return itemRetrieval.some((e) => e.id === value[0].id);

  default:
    break;
  }
};

export {
  saveEmailToLocalStorage,
  saveMealsTokenToLocalStorage,
  saveCocktailsTokenToLocalStorage,
  saveRecipeProgress,
  saveFavoriteRecipeToLocalStorage,
  getFavoriteRecipeFromLocalStorage,
};
