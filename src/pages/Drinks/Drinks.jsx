import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import dataContext from '../../context/dataContext';
import Card from '../../components/Card_Drink_or_Food/Card';
import ButtonCategories from '../../components/button_categories/ButtonCategories';

function Drinks() {
  /* useEffect(() => {
    GetCategorieDrinks();
    GetCategorieFoods();
  }, []); */
  const { drinks, catDrinks } = useContext(dataContext);
  return (
    <div>
      <Header />
      <h1>Drinks</h1>
      <section className="contanierButtons">
        {
          catDrinks.map((category) => (
            <ButtonCategories
              key={ category.strCategory }
              name={ category.strCategory }
            />
          ))
        }
      </section>
      <section className="contanierCards">
        {
          drinks.map((drink) => (
            <Card
              key={ drink.idDrink }
              img={ drink.strDrinkThumb }
              name={ drink.strDrink }
            />
          ))
        }
      </section>
      <MenuInferior />
    </div>
  );
}

export default Drinks;
