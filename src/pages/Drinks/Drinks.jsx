import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
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
          drinks.map((drink, index) => (
            <div
              key={ drink.idDrink }
              onClick={ () => history.push(`/drinks/${drink.idDrink}`) }
              role="button"
              onKeyPress={ () => history.push(`/drinks/${drink.idDrink}`) }
              tabIndex={ index }
            >
              <Card
                img={ drink.strDrinkThumb }
                name={ drink.strDrink }
              />
            </div>
          ))
        }
      </section>
      <MenuInferior />
    </div>
  );
}

export default Drinks;
