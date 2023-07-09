import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './Components/HomeComponent/Home';
import Navi from './Components/NavbarComponent/Navbar';
import About from './Components/AboutComponent/About';
import Products from './Components/ProductsComponent/Products';
import Cart from './Components/CartComponent/Cart';
import Footer from './Components/FooterComponent/Footer';
import ProductsPage from './Components/ProductsComponent/ProductsPage';
import ProductsIndex from './Components/ProductsComponent/ProductsIndex';
import Product from './Components/ProductsComponent/Product';

const App = () => {
  return (
    <Container fluid>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<ProductsPage />}>
          <Route path="" element={<ProductsIndex />} />
          <Route path=":id" element={<Products />} />
          <Route path=":id/:id2" element={<Product />} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App;