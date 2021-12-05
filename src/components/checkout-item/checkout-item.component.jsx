import React from 'react';
import { useDispatch } from 'react-redux';
import CartActionTypes from '../../redux/cart/cart.types';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
   const { product_name, imageurl, price, quantity } = cartItem;

   const dispatch = useDispatch();

   const removeItemFromCart = (cartItem) => {
      dispatch({type: CartActionTypes.REMOVE_ITEM,
         payload: cartItem
      });
   }
   const addItemToCart = (cartItem) => {
      dispatch({type: CartActionTypes.ADD_ITEM,
         payload: cartItem
      });
   }

   const clearItemFromCart = (cartItem) => {
      dispatch({type: CartActionTypes.CLEAR_ITEM_FROM_CART,
         payload: cartItem
      });
   }
   return (
   <div className="checkout-item">
      <div className="image-container">
         <img src={imageurl} alt="item" />
      </div>
      <span className="name">{product_name}</span>
      <span className="quantity">
         <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span> 
         <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
         </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
   </div>

)};

export default CheckoutItem;