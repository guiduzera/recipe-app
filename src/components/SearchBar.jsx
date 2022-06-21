import React, { useState } from 'react';

export default function SearchBar() {
  const [searchBarState, setSearchBarState] = useState({
    searchRecipe: '',
    radioFilter: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSearchBarState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Recipe"
        name="searchRecipe"
        value={ searchBarState.searchRecipe }
        onChange={ handleChange }
      />
      <label htmlFor="radio_igredient">
        Igredient
        <input
          name="radioFilter"
          value="Igredient"
          type="radio"
          id="radio_igredient"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="radio_name">
        Name
        <input
          name="radioFilter"
          value="Name"
          type="radio"
          id="radio_name"
          data-testid="name-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="radio_first_letter">
        First Letter
        <input
          name="radioFilter"
          value="First Letter"
          type="radio"
          id="radio_first_letter"
          data-testid="first-letter-search-radio"
          onChange={ handleChange }
        />
      </label>
      <button type="button" data-testid="exec-search-btn">
        Search
      </button>
    </div>
  );
}
