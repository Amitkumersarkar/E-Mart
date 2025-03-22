import { useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Header/Navbar';


function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"
  })
  // console.log(isActive);

  // declared new state
  const [selectedProduct, setSelectedProduct] = useState([]);

  // manipulate state here
  const handleSelectedProduct = (product) => {
    console.log(product);
  }




  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about"
      })

    }
  }

  console.log(isActive);

  return (
    <>
      <Navbar></Navbar>

      <div className='flex gap-60  p-4 font-semibold text-cyan-700'>

        <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>

        <CartContainer isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>

      </div>

    </>
  )
}

export default App
