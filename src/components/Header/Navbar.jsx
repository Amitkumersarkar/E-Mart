import './Navbar.css';
const Navbar = () => {
    return (
        <div className='style'>
            <p className='font-bold'>E-Mart</p>
            <ul className='flex justify-between gap-4 font-bold'>
                <li>Home</li>
                <li>Product</li>
                <li>Cart</li>
                <p>$500</p>
            </ul>
        </div>
    );
};

export default Navbar;