import { useEffect, useState } from 'react';
import './AllProducts.css';
import SingleProduct from '../singleProduct/SingleProduct';
const AllProducts = ({ handleSelectedProduct }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    // console.log(products);
    return (
        <div>
            <h1 className='text-3xl pb-2 pl-5  text-black'>All Products</h1>

            {/* mam on singleProduct */}
            {
                products.map((product) => <SingleProduct handleSelectedProduct={handleSelectedProduct} key={product.id} product={product}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;