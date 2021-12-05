import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import CollectionsOverview from '../collections-overview/collections-overview.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { UserActionTypes } from '../../redux/user/user.types';

import './header.styles.scss';

const Header = () => {

  const dispatch = useDispatch();
  const userLoggedIn = useSelector( (state) => state.user.currentUser);
  const hidden = useSelector( (state) => state.cart.hidden);
  Axios.defaults.withCredentials = true;

  const logoutUser = () => {
    Axios.post('https://purple-tech-co.herokuapp.com/logout', {
       }).then((response) => {
         console.log(response);
          isUserLoggedIn();
       }).catch(error => {
         console.log("logout error", error);
       })
    } 






 const isUserLoggedIn = () => {
    dispatch({type: UserActionTypes.SET_CURRENT_USER,
       payload: null
    });
 }


  return (
    <>
   <Navbar bg="primary" expand="lg">
    <Navbar.Brand href="/">
        <img src="https://user-images.githubusercontent.com/71128464/102078146-5614ea00-3e02-11eb-91f0-c9416178faf2.png" width="50px" height="50px" alt="abd store brand logo" />
    </Navbar.Brand>
    <Navbar.Text>
      PURPLE TECH CO.
    </Navbar.Text>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" > 
        <Link to='/shop/all' className="nav-link">SHOP ALL</Link>
      { userLoggedIn ? (
        <Nav.Link href="/signupandsignin">Signed In: {userLoggedIn}</Nav.Link>
      ) : (
        <Nav.Link href="/signupandsignin">SIGN IN</Nav.Link>
      )
      }
      {
        userLoggedIn ? (
          <Nav.Link href="/" onClick={() => logoutUser()} > Logout </Nav.Link>
        ) : null
      }

        <CartIcon /> 
      </Nav>
      
    </Navbar.Collapse>
   
  </Navbar>
  {hidden ? null : <CartDropdown />}
   </>
  )
};


export default Header;