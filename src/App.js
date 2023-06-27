import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import Navbar from './Components/NavbarComponent/Navbar';
import About from './Components/AboutComponent/About';
import Products from './Components/ProductsComponent/Products';
import Cart from './Components/CartComponent/Cart';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;