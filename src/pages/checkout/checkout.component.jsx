/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)

   

  const total = cartItems.reduce((accumulatedQuantity, cartItem) => 
  accumulatedQuantity + cartItem.quantity * cartItem.price, 0
)
      

   return (
   <div className='checkout-page'>
   <div className='checkout-header'>
     <div className='header-block'>
       <span>Product</span>
     </div>
     <div className='header-block'>
       <span>Description</span>
     </div>
     <div className='header-block'>
       <span>Quantity</span>
     </div>
     <div className='header-block'>
       <span>Price</span>
     </div>
     <div className='header-block'>
       <span>Remove</span>
     </div>
   </div>
   {cartItems.map(cartItem => (
     <CheckoutItem key={cartItem.id} cartItem={cartItem} />
   ))}
   <div className='total'>TOTAL: €{total}</div>
   <div className="warning">
     Please use the following test credit card for payment
     <br />
     4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
   </div>
   <StripeCheckoutButton price={total} />
 </div>

   )
}

export default CheckoutPage;