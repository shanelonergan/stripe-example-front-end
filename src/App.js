// => imports
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const BASE_URL = 'http://localhost3000'
const CHARGES_URL = BASE_URL + '/charges'

// => app component
export default function App() {

    const onToken = (token, price) => {

        const charge = {
            token: token.id
        };

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge, price: price })
        };

        fetch(CHARGES_URL, config)
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
