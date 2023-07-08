import { PRODUCT } from "../../Assets/Data/PRODUCT";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Products.css"
const ProductsIndex = () => {
    return (
            <Container className="con" fluid>
                <Row>
                    {PRODUCT.map((product) => {
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} style={{display: "flex", justifyContent: "center"}}>
                                <Card className="productIndexCard" to={product.name} as={Link}>
                                    <Card.Img src={product.image} className="productIndexImage" />
                                    <Card.ImgOverlay>
                                        <Card.Text>
                                            {product.name}
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
    )
}

export default ProductsIndex;