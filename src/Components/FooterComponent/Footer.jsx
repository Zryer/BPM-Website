import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
    return (
        <Container className="footerContainer" fluid>
            <Row>
                <Col>
                    <h1>Footer</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;