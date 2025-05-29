import { useEffect } from 'react'
import { useState } from 'react';

function fetchapi() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetching = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const json = await response.json();
            setData(json);
        }
        fetching();
    }, [])
    return data;
}

export default fetchapi;