import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { product_name, imageurl, price, quantity } }) => {


   return (
      <div className="cart-item">
         <img src={imageurl} alt="item" />
         <div className="item-details">
            <span className="name">{product_name}</span>
            <span className="price">{quantity} x €{price}</span>
         </div>
      </div>
   )
}

export default CartItem;