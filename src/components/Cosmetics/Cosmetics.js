import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../utilites/calculetor';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>I Was Make Fake Data</h1>
            <p>Money Me : {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;