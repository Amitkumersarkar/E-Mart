import './CartContainer.css';
const CartContainer = ({ handleIsActiveState }) => {

    console.log(handleIsActiveState);

    return (
        <div>
            <h1>Cart Container</h1>
            <div className='flex justify-between gap-4 pt-1 cursor-pointer'>
                <button onClick={() => handleIsActiveState("cart")} className='btn'>Cart</button>
                <div className=' btn'>
                    <button onClick={() => handleIsActiveState("about")}>About</button>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;