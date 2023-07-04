import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navi = () => {
    return (
        <Navbar>
            <Nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/About">
                    About
                </Link>
                <Link to="/Products">
                    Products
                </Link>
                <Link to="/Cart">
                    Cart
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Navi;