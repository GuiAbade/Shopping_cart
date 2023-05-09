import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar/>
        <button>car</button>
      </div>
    </header>
  );
}

export default Header;
