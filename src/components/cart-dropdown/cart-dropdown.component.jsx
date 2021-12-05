import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartActionTypes from '../../redux/cart/cart.types';

import './cart-dropdown.styles.scss';




const CartDropdown = ({ history }) => {

   
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.cartItems)

   const hideCartDropdown = () => {
      dispatch({type: CartActionTypes.TOGGLE_CART_HIDDEN
      });
   }
   return (
      <div className="cart-dropdown">
         <div className="cart-items">
            { 
               cartItems.length ?  
               cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} item={cartItem} />
               )) : (
               <span className="empty-message">Your cart is empty</span>
                )}
         </div>
         <CustomButton onClick={() => {
            history.push('/checkout')
            hideCartDropdown();
         }}>CHECKOUT</CustomButton>
      </div>
   )
}

export default withRouter(CartDropdown);