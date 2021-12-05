import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Axios from 'axios';

import HomePage from './pages/homepage/homepage.component';
import SignUpAndSignIn from './pages/signupandsignin/signupandsignin.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {

  const userLoggedIn = useSelector( (state) => state.user.currentUser);

  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/shop' component={ShopPage} />
            <Route
            exact
            path='/signupandsignin'
            render={() =>
              userLoggedIn ? (
                <Redirect to='/' />
              ) : (
                <SignUpAndSignIn />
              )
            }
          />
        <Route exact path = "/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
    </>
  );
}
export default App;
