import React from 'react';
import { divided } from '../utilites/calculetor';

const Cloath = () => {
    const first = 5000;
    const second = 10;
    const result = divided(first, second)
    return (
        <div>
            <h3>This is Cloath Data.</h3>
            <h4>Per Person Cloath: {result}</h4>
        </div>
    );
};

export default Cloath;