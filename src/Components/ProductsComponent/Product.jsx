import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { useParams } from "react-router-dom";
import { PRODUCT } from "../../Assets/Data/PRODUCT";

const Product = () => {

    const { id, id2 } = useParams();

    const category = PRODUCT.find(element => element.name == id)

    const product = category.data.find(element => element.name == id2)

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                            src={product.image}
                        />
                        <Figure.Caption style={{ fontSize: "2rem" }}>
                            {product.name}
                        </Figure.Caption>
                        <Figure.Caption style={{ fontSize: "1rem" }}>
                            {product.calorie}
                        </Figure.Caption>
                        <Figure.Caption style={{ fontSize: "1rem" }}>
                            {product.price}
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    )
}

export default Product;