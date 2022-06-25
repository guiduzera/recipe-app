import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import './Profile.css';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));

  const doneRecipes = () => {
    console.log('done recipes');
  };

  const favoriteRecipes = () => {
    console.log('favorite recipes');
  };

  const logout = () => {
    console.log('logout');
  };

  return (
    <div>
      <Header />
      <h1 data-testid="profile-email" className="email">{user.email}</h1>
      <section className="profileButtons">
        <button
          className="done-btn"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => { doneRecipes(); } }
        >
          Done Recipes
        </button>
        <button
          className="favorite-btn"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => { favoriteRecipes(); } }
        >
          Favorite Recipes
        </button>
        <button
          className="logout-btn"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => { logout(); } }
        >
          Logout
        </button>

      </section>
      <MenuInferior />
    </div>
  );
}

export default Profile;
