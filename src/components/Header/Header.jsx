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

  return (
    <div>
      <div className="header">
        <button
          type="button"
          className="btn-profile"
          data-testid="profile-top-btn"
          onClick={ () => openProfile() }
        >
          <img src={ profile } alt="Perfil" />
        </button>
        <div className="center">
          title
        </div>
        <button
          type="button"
          onClick={ () => (isOpen === true ? setIsOpen(false) : setIsOpen(true)) }
          style={ { border: 'none', background: 'lightgray' } }
        >
          <img data-testid="search-top-btn" src={ search } alt="Buscar" />
        </button>
      </div>
      { isOpen && <SearchBar />}
    </div>
  );
}

export default Header;
