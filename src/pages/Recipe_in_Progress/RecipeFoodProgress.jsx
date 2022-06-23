import React, { useEffect, useState } from 'react';

function RecipeFoodProgress() {
  const [mock, setMock] = useState([]);
  useEffect(() => {
    const endpoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
    const getRecipeMock = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
      setMock(data.meals);
    };
    getRecipeMock();
  }, []);
  console.log(mock);

  return (
    <section>
      <h1>Recipe Food</h1>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    </section>
  );
}

export default RecipeFoodProgress;
