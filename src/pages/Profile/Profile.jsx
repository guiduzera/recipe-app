import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuInferior from '../../components/menu inferior/MenuInferior';
import Header from '../../components/Header/Header';
import './Profile.css';

function Profile() {
  const history = useHistory();
  const [email, setEmail] = useState('user');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user !== null) {
      setEmail(user.email);
    }
  }, []);

  const doneRecipes = () => {
    history.push('/done-recipes');
  };

  const favoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      <h1 data-testid="profile-email" className="email">{email}</h1>
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
