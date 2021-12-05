import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

import { ShopActionTypes } from '../../redux/shop/shop.types';

import Carousel from 'react-elastic-carousel';
import Item from '../carousel-item/carousel-items.component';
import { CustomButtonContainer } from '../custom-button/custom-button.styles'
import { addItem } from '../../redux/cart/cart.actions';


import './multiitem-carousel.styles.scss';
import CartActionTypes from '../../redux/cart/cart.types';

const breakPoints = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 2 },
   { width: 768, itemsToShow: 4 },
   { width: 1200, itemsToShow: 4 },
 ];

const MultiItemCarousel = () => {

      const dispatch = useDispatch();

      const shopItems = useSelector( (state) => state.shop.collections);

      const { id, product_name, imageurl, product_price } = shopItems;

      useEffect(() => {

         Axios.get('http://localhost:3001/products', {
            // id: productId,
            // name: productName,
            // url: productUrl,
            // price: productPrice
         }).then((response) => {
            if (response.data) {
               try {
                  dispatchCollectionItems(response.data);
               } catch (err) {
                  console.log(err);
               }
         
            } 
         })
         
      }, [])


   
   
   
      const dispatchCollectionItems = (data) => {
         dispatch({type: ShopActionTypes.UPDATE_COLLECTIONS,
            payload: data
         });
      }
      const addItemToCart = (shopItem) => {
         dispatch({type: CartActionTypes.ADD_ITEM,
            payload: shopItem
         });
      }
   






   return (
      <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
           {
              shopItems.map((shopItem) => {

                 return <Item key={shopItem.id} >
                    <img src={shopItem.imageurl} alt="product" width="100" height="150" />
                    <div className="addtocart">
                 <CustomButtonContainer onClick={() => addItemToCart(shopItem)} inverted>{shopItem.product_name}:€{shopItem.price}</CustomButtonContainer>
                </div>
                 </Item>
                 
              })

           }
        </Carousel>
      </div>
      </>
   );
}

export default MultiItemCarousel;