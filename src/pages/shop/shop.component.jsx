import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../../pages/collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => {
   console.log(match);
   return (
   <div className="shop-page">
      <Route exact path={`${match.path}`}component={CollectionPage} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>

)};

export default ShopPage;