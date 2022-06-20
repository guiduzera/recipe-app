const saveEmailToLocalStorage = (email) => {
  const user = {
    email,
  }
  localStorage.setItem('user', user);
}

const saveMealsTokenToLocalStorage = (value) => {
  localStorage.setItem('mealsToken', value)
}

const saveCocktailsTokenToLocalStorage = (value) => {
  localStorage.setItem('cocktailsToken', value)
}

export {
  saveEmailToLocalStorage,
  saveMealsTokenToLocalStorage,
  saveCocktailsTokenToLocalStorage,
}
