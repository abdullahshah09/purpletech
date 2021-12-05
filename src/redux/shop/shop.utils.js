import { useDispatch }   from 'react-redux';
import ShopActionTypes from './shop.types';

import Axios from 'axios';

export const convertCollectionsToMap = () => {

const dispatch = useDispatch();
const dispatchLaptops = useDispatch();

Axios.get('http://localhost:3001/products/laptops', {

}).then((response) => {
   if (response.data) {
      dispatchCollectionItems(response.data);
   } else {
      dispatchCollectionItems(response.data[0].id, response.data[0].product_name, response.data[0].productUrl, response.data[0].price);
   }
})

 Axios.get('http://localhost:3001/products', {
      // id: productId,
      // name: productName,
      // url: productUrl,
      // price: productPrice
   }).then((response) => {
      if (response.data) {
            dispatchCollectionItems(response.data);
      } else {
         dispatchCollectionItems(response.data[0].id, response.data[0].product_name, response.data[0].productUrl, response.data[0].price);
      }
})



   const dispatchCollectionItems = (productId, productName, productUrl, productPrice) => {
      dispatch({type: ShopActionTypes.UPDATE_COLLECTIONS,
         payload: productId, productName, productUrl, productPrice
      });
   }

   const dispatchCollectionItems = (productId, productName, productUrl, productPrice) => {
      dispatchLaptops({type: ShopActionTypes.UPDATE_COLLECTIONS,
         payload: productId, productName, productUrl, productPrice
      });
   }

}
