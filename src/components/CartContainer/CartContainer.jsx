import './CartContainer.css';
const CartContainer = ({ handleIsActiveState, isActive }) => {

    console.log(isActive);

    return (
        <div>
            <h1 className='font-bold text-black'>Cart Container</h1>
            <div className='flex justify-between gap-4 pt-1 cursor-pointer'>
                <button onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? "btn active" : " btn"}`}>CART</button>
                <div>
                    <button onClick={() => handleIsActiveState("about")} className={`${isActive.cart ? " btn" : "active btn"}`}>ABOUT</button>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;