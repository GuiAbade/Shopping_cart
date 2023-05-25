import React from 'react';

function ProductCard(){
  return ( 
    <section  className="product-card">
      <img src="" alt="product" className="card__image"/>

      <div className="card__infos">
        <h2 className="card__price"> R$ 200.20</h2>
        <h2 className="card__title">Manual do dev</h2>
      </div>
    </section>
  );
}

export default ProductCard;
