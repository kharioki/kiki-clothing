import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeChackoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_JkMdJxgxYF9NJifEIzGuehrs00WJXjc7e1';

    const onToken = token => {
        console.log({token});
        alert('Payment Successful!!')
    }
    return(
        <StripeCheckout
          label='Pay Now'
          name='Kiki Clothing.'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeChackoutButton;