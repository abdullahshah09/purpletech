import React, { useState } from 'react';
import Axios from 'axios';
import {userSignUpSchema} from '../../validation/userValidation';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Button } from 'react-bootstrap';

import './signup.styles.scss';

const SignUp = () => { 

   Axios.defaults.withCredentials = true;
   
   const registerUser = (data) => {
      console.log(data);
      Axios.post('https://purple-tech-co.herokuapp.com/register', {
            username: data.name,
            email: data.email,
            password: data.password 
         }).then((response) => {
            console.log(response);
         });
         
      } 

   return (
    
      <div className="sign-up">
         <Formik
            initialValues={{
               name: '',
               email: '',
               password: '',
               confirmPassword: ''
            }}
            validationSchema={userSignUpSchema}
            onSubmit={registerUser}
            >
               {({
                  values,
                  errors,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  handleReset,
                  touched
               }) => {
                  return (
                     <form onSubmit={handleSubmit}>
                        <Form.Group>
                           <Form.Label>Display Name</Form.Label>
                           <Form.Control type="text" 
                           placeholder="Enter name"
                           name="name"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name}
                           />
                           {errors.name && touched.name ? 
                           <div className="error-message">
                              {errors.name}
                           </div> : null 
                            }
                        </Form.Group>
                        
                        <Form.Group>
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="email" 
                           placeholder="Enter email"
                           name="email"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                           />
                           {errors.email && touched.email ? 
                           <div className="error-message">
                              {errors.email}
                           </div> : null
                          }
                        </Form.Group>

                        <Form.Group>
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" 
                           placeholder="Enter password"
                           name="password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                           />
                           { errors.password && touched.password ? 
                           <div className="error-message">
                              {errors.password}
                           </div> : null
                           }
                        </Form.Group>

                        <Form.Group>
                           <Form.Label>Confirm Password</Form.Label>
                           <Form.Control type="password" 
                           placeholder="Re-enter password"
                           name="confirmPassword"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.confirmPassword}
                           />
                           { errors.confirmPassword && touched.confirmPassword ? 
                           <div className="error-message">
                              {errors.confirmPassword}
                           </div> : null
                           }
                        </Form.Group>
                        <Button variant="primary" type="submit">
                           Submit
                        </Button>
                     </form>
                  )
               }}
         </Formik>

      </div>
                  
   )
 }

export default SignUp;