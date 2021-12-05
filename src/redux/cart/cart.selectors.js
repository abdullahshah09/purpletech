import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
   [selectCart], 
   (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => 
   {
      if(isNaN(cartItem.quantity)) {
         console.log("I am being called");
         return accumulatedQuantity
         
      }
      return accumulatedQuantity + cartItem.quantity;
   }, 0
   )
)