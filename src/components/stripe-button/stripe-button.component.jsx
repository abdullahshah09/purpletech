import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = "pk_test_51HyEO3JeuGYj9MN0NTaC84iOvsvmnI5qLOAJdS0qQ6zkf7uGmdJZYTzE0okWqBXm8ehPM00Z5NxsrMJm4Gq477AX00dtv8c081";

  const onToken = token => {
      console.log(token);
      alert("Payment Successful");
   };

   return (
      <StripeCheckout
         label="Pay Now"
         name="Purple Tech Ltd."
         image="https://user-images.githubusercontent.com/71128464/102078146-5614ea00-3e02-11eb-91f0-c9416178faf2.png"
         billingAddress
         shippingAddress
         description={`Your total is €${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   )
};

export default StripeCheckoutButton;