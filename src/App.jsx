import { useState } from 'react';
import './App.css';
import AllProducts from './components/Allproducts/Allproducts';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Header/Navbar';

function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active",
  })
  console.log(isActive);
  return (
    <>
      <Navbar></Navbar>

      <div className='flex justify-around items-center p-4 font-semibold text-cyan-700'>
        <AllProducts></AllProducts>
        <CartContainer></CartContainer>
      </div>
    </>
  )
}

export default App
