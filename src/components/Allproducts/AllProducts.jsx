import { useEffect, useState } from 'react';
import './AllProducts.css';
const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1 className='font-bold text-black'>All Products</h1>
        </div>
    );
};

export default AllProducts;