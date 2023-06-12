import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../utilites/fakedb';


const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }
    return (
        <div className='product'>
            <h2>Name: {name}</h2>
            <p>price: {price}</p>
            <p><small>id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;