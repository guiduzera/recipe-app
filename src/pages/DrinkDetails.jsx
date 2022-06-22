/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDrinksDetails } from '../services/DetailsApi';

export default function DrinkDetails() {
  const [drinkRecipe, setDrinkRecipe] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const executeFetch = async () => {
      const responseApi = await fetchDrinksDetails(id);
      setDrinkRecipe([responseApi]);
    };
    executeFetch();
  }, []);
  console.log(drinkRecipe);
  if (drinkRecipe.length === 0) {
    return (
      <span>carregando</span>
    );
  }
  return (
    <div>DrinkDetails</div>
  );
}
