import React from 'react';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="left">
        <img data-testid="profile-top-btn" src={ profile } alt="Perfil" />
      </div>
      <div className="center">
        title
      </div>
      <div className="right">
        <img data-testid="search-top-btn" src={ search } alt="Buscar" />
      </div>
    </header>
  );
}

export default Header;
