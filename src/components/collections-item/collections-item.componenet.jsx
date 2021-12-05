import React from 'react';
import { useDispatch } from 'react-redux';
import CartActionTypes from '../../redux/cart/cart.types';

import { Card, CardDeck } from 'react-bootstrap';
import CustomButton from '../custom-button/custom-button.component';

import CustomButtonContainer from '../custom-button/custom-button.component';

import './collections-item.styles.scss';

const CollectionItem = ({ item }) => {
   const { product_name, imageurl, price } = item;

   const dispatch = useDispatch();

   const addItemToCart = (item) => {
      dispatch({type: CartActionTypes.ADD_ITEM,
         payload: item
      });
   }


   return (
      <CardDeck>
         <Card>         
            <Card.Body>
               <Card.Title>{product_name}</Card.Title>
                 <Card.Img variant="top" src={imageurl}/>
            </Card.Body>
            <Card.Footer>
               <div className="footer">
                  <medium className="text-dark">Price: €{price}</medium>
               </div>
               <CustomButtonContainer onClick={() => addItemToCart(item)}>ADD TO CART</ CustomButtonContainer>
            </Card.Footer>
         </Card>
        </CardDeck>
   )
}

export default CollectionItem;