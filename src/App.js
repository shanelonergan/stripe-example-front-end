// => imports
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

// => require dotenv
// require('dotenv').config({ path: 'stripe-example-front-end/.env'})

// => app component
export default function App() {

    const onToken = (token) => {

        const config = {
            method: 'POST',
            body: JSON.stringify(token),
        }

        fetch('http://localhost3000/charges', config)
        .then(res => res.json())
        .then(console.log)
    }

    return (
        <div>
            <h1>Stripe Example Project</h1>
            <StripeCheckout
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        </div>
    )
}
