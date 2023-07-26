import React, {useState, useContext} from 'react';
import {BsSearch} from 'react-icons/bs';
import './SearchBar.css';
import fatchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar () {

  const {setProducts} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    const produtcs = await fatchProducts(searchValue); 
    setProducts(produtcs);
    setSearchValue('');
  };


  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
      {setProducts}
      <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos"
        className="search_input"
        onChange={(target) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search_button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
