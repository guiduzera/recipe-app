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

export {
  saveEmailToLocalStorage,
  saveMealsTokenToLocalStorage,
  saveCocktailsTokenToLocalStorage,
  saveRecipeProgress,
};
