import Cart from '../Cart/Cart';
import About from '../Cart/About/About'
import './CartContainer.css';
const CartContainer = ({ handleIsActiveState, isActive }) => {

    console.log(isActive);

    return (
        <div>
            <h1 className=' text-3xl pb-2 pl-5 text-black '>Cart Container</h1>
            <div className='flex justify-between gap-4 pt-2 p-5 gap-x-5 cursor-pointer'>
                <button onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? "btn active" : " btn"}`}>CART</button>
                <div>
                    <button onClick={() => handleIsActiveState("about")} className={`${isActive.cart ? " btn" : "active btn"}`}>ABOUT</button>
                </div>
            </div>
            {/* Conditional rendering */}
            {isActive.cart ? <Cart></Cart> : <About></About>}
        </div>
    );
};

export default CartContainer;