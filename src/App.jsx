import './App.css';
import AllProducts from './components/Allproducts/Allproducts';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Header/Navbar';

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <AllProducts></AllProducts>
        <CartContainer></CartContainer>
      </div>
    </>
  )
}

export default App
