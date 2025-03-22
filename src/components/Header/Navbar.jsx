import './Navbar.css';
const Navbar = ({ selectedProduct, price }) => {
    return (
        <div className='style border-b-1 pb-2'>
            <p className='text-2xl font-semibold font-serif'><i>E-Mart</i></p>
            <ul className='flex justify-between gap-4 font-bold'>
                <li>Home</li>
                <li>Product</li>
                <li>Cart {selectedProduct.length}</li>
                <p>$ {price}</p>
            </ul>
        </div>
    );
};

export default Navbar;