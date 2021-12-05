import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import CartActionTypes from '../../redux/cart/cart.types';

const CartIcon = () => {

   const cartItems = useSelector( (state) => state.cart.cartItems)
   const itemCount = cartItems.reduce((accumulatedQuantity, cartItem) => 
   {
      if(isNaN(cartItem.quantity)) {
         console.log("I am being called");
         return accumulatedQuantity
         
      }
      return accumulatedQuantity + cartItem.quantity;
   }, 0 )

   const dispatch = useDispatch();

   const hideCartDropdown = () => {
      dispatch({type: CartActionTypes.TOGGLE_CART_HIDDEN
      });
   }
   
   return(
      <div className="cart-icon" onClick={hideCartDropdown}>
         <ShoppingIcon className="shopping-icon" />
   <span className="item-count">{itemCount}</span>
     </div>
   )

}

export default CartIcon;
