import React from 'react';
import { add, multiply } from '../utilites/calculetor';

const Shoes = () => {
    const first = 22;
    const second = 10;
    const total = multiply (first, second);
    const sum = add(first, second)
    return (
        <div>
            <h3>It is shoes shop.</h3>
            <h4>Total: {total} and Sum: {sum}</h4>
        </div>
    );
};

export default Shoes;