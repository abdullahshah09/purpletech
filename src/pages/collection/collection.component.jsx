import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { ShopActionTypes } from '../../redux/shop/shop.types';
import CollectionItem from '../../components/collections-item/collections-item.componenet';
import './collection.styles.scss';  

const CollectionPage = ({ match }) => {

   const dispatch = useDispatch();

   const dispatchCollectionItems = (productId, productName, productUrl, productPrice) => {
      dispatch({type: ShopActionTypes.UPDATE_COLLECTIONS,
         payload: productId, productName, productUrl, productPrice
      });
   }

   useEffect(() =>{

      if (match.params.collectionId) {
         Axios.get(`https://purple-tech-co.herokuapp.com/products/${match.params.collectionId}`, {
         }).then((response) => {
            if (response.data) {
               dispatchCollectionItems(response.data);
            } else {
               dispatchCollectionItems(response.data[0].id, response.data[0].product_name, response.data[0].productUrl, response.data[0].price);
            }
         })
      } 
   }, [])


   
   const items = useSelector( (state) => state.shop.collections);

   return (
      <div className="collection-page">
         <h2 className="title"></h2>
         <div className="items">
            {items.map(item => (
            <CollectionItem key={item.id} item={item} />
            ))}
         </div>
      </div>
   )
}

export default CollectionPage;