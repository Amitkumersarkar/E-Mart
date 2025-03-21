import { useState } from 'react';
import './App.css';
import AllProducts from './components/Allproducts/Allproducts';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Header/Navbar';

function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"
  })
  // console.log(isActive);

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "active"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "active"
      })

    }
  }


  return (
    <>
      <Navbar></Navbar>

      <div className='flex justify-around items-center p-4 font-semibold text-cyan-700'>
        <AllProducts></AllProducts>
        <CartContainer handleIsActiveState={ }></CartContainer>
      </div>
    </>
  )
}

export default App
