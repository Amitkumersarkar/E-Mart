import Cart from '../Cart/Cart';
import About from '../Cart/About/About'
import './CartContainer.css';
const CartContainer = ({ handleIsActiveState, isActive, selectedProduct }) => {

    // console.log(isActive);

    return (
        <div>
            <h1 className=' text-3xl pb-2 text-black '>Cart Container</h1>
            <div className='flex justify-between gap-4 pt-2 pb-2 cursor-pointer'>
                <button onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? "btn active" : " btn"}`}>CART</button>
                <div>
                    <button onClick={() => handleIsActiveState("about")} className={`${isActive.cart ? " btn" : "active btn"}`}>ABOUT</button>
                </div>
            </div>
            {/* Conditional rendering */}
            {isActive.cart ? <Cart selectedProduct={selectedProduct}></Cart> : <About></About>}
        </div>
    );
};

export default CartContainer;