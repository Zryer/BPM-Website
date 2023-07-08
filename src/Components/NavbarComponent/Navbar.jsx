import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navi = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" style={{ marginTop: "1vh" }}>
            <Navbar.Brand>
                <Nav.Link to="/" as={Link} id="naviLink" eventKey="1">Logo</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle className="navbarButton" />
            <Navbar.Collapse style={{justifyContent: "flex-end"}}>
                <Nav>
                    <Nav.Link to="/About" as={Link} id="naviLink" eventKey="2">
                        About
                    </Nav.Link>
                    <Nav.Link to="/Products" as={Link} id="naviLink" eventKey="3">
                        Products
                    </Nav.Link>
                    <Nav.Link to="/Cart" as={Link} id="naviLink" eventKey="4">
                        Cart
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navi;