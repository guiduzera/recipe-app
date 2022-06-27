import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../SearchBar';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import './Header.css';

function Header() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const openProfile = () => {
    localStorage.clear();
    history.push('/profile');
  };

  const path = history.location.pathname;
  let title = '';
  let searchIcon = false;
  switch (path) {
  case '/foods':
    title = 'Foods';
    searchIcon = true;
    break;
  case '/drinks':
    title = 'Drinks';
    searchIcon = true;
    break;
  case '/explore':
    title = 'Explore';
    break;
  case '/explore/foods':
    title = 'Explore Foods';
    break;
  case '/explore/drinks':
    title = 'Explore Drinks';
    break;
  case '/explore/foods/ingredients':
    title = 'Explore Ingredients';
    break;
  case '/explore/drinks/ingredients':
    title = 'Explore Ingredients';
    break;
  case '/explore/foods/nationalities':
    title = 'Explore Nationalities';
    searchIcon = true;
    break;
  case '/done-recipes':
    title = 'Done Recipes';
    break;
  case '/profile':
    title = 'Profile';
    break;
  case '/favorite-recipes':
    title = 'Favorite Recipes';
    break;
  default:
    title = '';
    searchIcon = false;
  }

  console.log(history.location.pathname);

  return (
    <div>
      <div className="header">
        <button
          type="button"
          className="btn-profile"
          onClick={ () => openProfile() }
        >
          <img data-testid="profile-top-btn" src={ profile } alt="Perfil" />
        </button>
        <div
          className="center"
          data-testid="page-title"
        >
          { title }
        </div>
        {searchIcon === true
          ? (
            <button
              type="button"
              onClick={ () => (isOpen === true ? setIsOpen(false) : setIsOpen(true)) }
              style={ { border: 'none', background: 'lightgray' } }
            >
              <img data-testid="search-top-btn" src={ search } alt="Buscar" />
            </button>)
          : <span />}
      </div>
      { isOpen && <SearchBar />}
    </div>
  );
}

export default Header;
