import './CartContainer.css';
const CartContainer = () => {
    return (
        <div>
            <h1>Cart Container</h1>
            <div className='flex justify-between gap-4 pt-1 cursor-pointer'>
                <button className='btn'>Cart</button>
                <div className=' btn'>
                    <button>About</button>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;