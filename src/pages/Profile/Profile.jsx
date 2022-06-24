import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import './Profile.css';

function Profile() {
  const user = storage.getItem('user');
  console.log(user);
  return (
    <div>
      <Header />
      <h1 data-testid="profile-email">email</h1>
      <section className="contanierButtons">
        <button
          className="done-btn"
          type="button"
          data-testid="profile-done-btn"
          /*  onClick={ () => { filterMeals('All'); } } */
        >
          Done Recipes
        </button>
        <button
          className="favorite-btn"
          type="button"
          data-testid="profile-favorite-btn"
          /*  onClick={ () => { filterMeals('All'); } } */
        >
          Favorite Recipes
        </button>
        <button
          className="logout-btn"
          type="button"
          data-testid="profile-logout-btn"
          /*  onClick={ () => { filterMeals('All'); } } */
        >
          Logout
        </button>

      </section>
      <MenuInferior />
    </div>
  );
}

export default Profile;
