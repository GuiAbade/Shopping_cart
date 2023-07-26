import React from 'react';
import Header from './componets/Header/Header';
import Products from './componets/Products/Products';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header/>
      <Products/>
    </Provider>
  );
}

export default App;
