import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {userSignInSchema} from '../../validation/userValidation';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { UserActionTypes } from '../../redux/user/user.types';

const SignIn = () => {

   Axios.defaults.withCredentials = true;

   const dispatch = useDispatch();

   const [emailLog, setEmailLog] = useState('');
   const [passwordLog, setPasswordLog] = useState('');

   const [loginStatus, setLoginStatus] = useState('');
   const [signInError, setSignInError] = useState('')
   
   const loginUser = async (event) => {
      event.preventDefault();

      let formData = {
         email: event.target[0].value,
         password: event.target[1].value,
      }

      var isValid = await userSignInSchema.isValid(formData);
      console.log(isValid);
      if (isValid) {
         Axios.post('https://purple-tech-co.herokuapp.com/login', {
            email: emailLog,
            password: passwordLog 
         }).then((response) => {
            
            if (response.data.message) {
               setSignInError(response.data.message)
            } else
             {
               isUserLoggedIn(response.data[0].username);
               Axios.get("https://purple-tech-co.herokuapp.com/login").then((response) => {
                  if (response.data.loggedIn == true) {
                    isUserLoggedIn(response.data.user[0].username);
                  }
                });
            }
   
         });
   
      } else {
         console.log("User sign in schema invalid");
      }
   }








   const isUserLoggedIn = (loginStatus) => {
      dispatch({type: UserActionTypes.SET_CURRENT_USER,
         payload: loginStatus
      });
   }


  
      return(
         <div className="sign-in">
         <Form onSubmit={loginUser} >
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                  onChange={
                     (e) => {setEmailLog(e.target.value);
                     }}
                  />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>
   
               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"
                  onChange={
                     (e) => {setPasswordLog(e.target.value);
                     }}
                  />
               </Form.Group>
               <h3 style={{color: 'red', fontSize: '18px'}}>{signInError}</h3>
               <Button variant="primary" type="submit"
               
               >
                  Submit
               </Button>
           </Form>
         </div>
      )
}

export default SignIn;