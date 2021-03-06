// => imports
import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

// => URLs
const BASE_URL = 'http://localhost:3000'
const CHARGES_URL = BASE_URL + '/charges'

// => app component
export default function App() {

    const [price, setPrice] = useState(100)

    const handlePrice = (event) => {
        setPrice(event.target.value)
    }

    const onToken = (token) => {

        const charge = {
            token: token.id
        };

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge, price: price * 100 })
        };

        fetch(CHARGES_URL, config)
        .then(res => res.json())
        .then(console.log)
    }

    return (
        <div>
            <form>
                <label>Price: </label>
                <input
                    type="number"
                    value={ price }
                    onChange={ handlePrice }
                />
            </form>

            <StripeCheckout
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        </div>
    )
}
