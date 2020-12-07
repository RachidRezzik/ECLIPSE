import React from 'react'

export default function Cart(props) {
    return (
        <div className={props.cartOpen ? "cart_container active" : "cart_container"}>
            <h2>Your Cart</h2>
        </div>
    )
}
