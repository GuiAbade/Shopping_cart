import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Header.css';
import CartButton from '../CartButton/CartButton.jsx';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;
