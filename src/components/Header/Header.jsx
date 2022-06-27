import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import profile from '../../images/profileIcon.svg';
import search from '../../images/searchIcon.svg';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="left">
          <img data-testid="profile-top-btn" src={ profile } alt="Perfil" />
        </div>
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
