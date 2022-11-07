import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../Utilities/calculate';

const Cosmetics = () => {

    //creating data by free moc API website
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('https://cosmatic.free.beeceptor.com/')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    const total = getTotal(cosmetics);

    /* creating data by data.json
     const [cosmetics, setCosmetics] = useState([])
     useEffect(() => {
         fetch('data.json')
             .then(res => res.json())
             .then(data => setCosmetics(data))
     }, []) */
    /* creating data by using JSON Generator
    
    const cosmetics =
        [
            {
                "id": "6363fb623b5c26aeb9a82db1",
                "price": "$2,074.07",
                "name": "Gomez Pugh"
            },
            {
                "id": "6363fb623624ba84e71b15ad",
                "price": "$3,584.12",
                "name": "Branch Forbes"
            },
            {
                "id": "6363fb6235260f3d4976406d",
                "price": "$2,197.02",
                "name": "Inez Gamble"
            },
            {
                "id": "6363fb622a66888bab4cb1f0",
                "price": "$2,254.69",
                "name": "Gates Carey"
            },
            {
                "id": "6363fb62f83140aae0e79e9e",
                "price": "$3,763.77",
                "name": "Randi Justice"
            },
            {
                "id": "6363fb624d072e31bf8c2f02",
                "price": "$1,340.62",
                "name": "Cline Downs"
            }
        ] */

    /* By manually creating data
    const cosmetics = [
        { id: 1, name: 'ALta', price: 100 },
        { id: 2, name: 'PaLish', price: 200 },
        { id: 3, name: 'Balish', price: 300 },
        { id: 4, name: 'Malish', price: 400 },
        { id: 5, name: 'Nalish', price: 500 },
        { id: 6, name: 'Salish', price: 600 },

    ] */
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total Price: {total}</p>
            <div style={{ backgroundColor: 'bisque', padding: '20px', margin: '10px' }}>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        cosmetic={cosmetic}
                        key={cosmetic.id}
                    ></Cosmetic>)
                }
            </div>
        </div>
    )
};

export default Cosmetics;