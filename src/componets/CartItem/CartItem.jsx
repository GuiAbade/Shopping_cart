import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';

function CartItem({ data }) {

  const {thumbail, title, price} = data;
  return (
    <section className="cart-item">
      <img  
        src="" 
        alt="Imagem do produto" 
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>

        <button
          type="button"
          className="button__remove-item"
        >
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;
