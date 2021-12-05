import * as yup from 'yup';

export const userSignUpSchema = yup.object().shape({
   name: yup.string().min(4, "Name not long enough").max(20, "Name must not be longer than 20 characters").required("Please Enter a Name"),
   email: yup.string().email("Invalid email").required("Please enter a Email"),
   password: yup.string().min(4, "Password not long enough").max(20, "Password must not be longer than 20 characters").required("Password is a required field"),
   confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const userSignInSchema = yup.object().shape({
   email: yup.string().email("Invalid email").required("Please enter an email"),
   password: yup.string().min(4, "Password not long enough").max(20, "Password must not be longer than 20 characters").required("Password is a required field"),
});

