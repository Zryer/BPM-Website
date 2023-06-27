import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
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
        </nav>
    )
}

export default Navbar;