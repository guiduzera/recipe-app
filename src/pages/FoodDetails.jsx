/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFoodsDetails } from '../services/DetailsApi';

export default function FoodDetails() {
  const [recipe, setrecipe] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const executeFetch = async () => {
      const responseApi = await fetchFoodsDetails(id);
      setrecipe([responseApi]);
    };
    executeFetch();
  }, []);
  console.log(recipe);
  if (recipe.length === 0) {
    return (
      <span>carregando</span>
    );
  }
  return (
    <div>FoodDetails</div>
  );
}
