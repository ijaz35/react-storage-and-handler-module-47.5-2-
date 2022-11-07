import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../Utilities/fakedb';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id)
    }
    const removeFromCart = id => {
        removeFromDb(id)
    }
    // const addToCartWithParam = () => addToCart(id)
    return (
        <div>
            <h2>Name:{name}</h2>
            <h4>Price:{price}</h4>
            <p>ID: {id}</p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove from cart</button>
            <button onClick={deleteShoppingCart}>Delete shopping Cart</button>
            <hr></hr>
        </div>
    );
};

export default Cosmetic;