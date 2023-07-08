import Accordian from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { PRODUCT } from "../../Assets/Data/PRODUCT";

const ProductAccordian = () => {
    return (
        <Container>
            <Row>
                {PRODUCT.map((products) => {
                    return (
                        <Container key={products.id}>
                            <h1>{`${products.name}`}</h1>
                            <Accordian alwaysOpen>
                                {products.data.map((prod) => {
                                    return (
                                        <Accordian.Item key={prod.id} eventKey={`${prod.id}`}>
                                            <Accordian.Header>
                                                {prod.name}
                                            </Accordian.Header>
                                            <Accordian.Body style={{ display: "flex", flexDirection: "row", }}>
                                                <Col>
                                                    Price: { } Calories: {prod.calorie}
                                                </Col>
                                                <Col style={{ display: "flex", justifyContent: "flex-end" }}>
                                                    <Button>{"->"}</Button>
                                                </Col>
                                            </Accordian.Body>
                                        </Accordian.Item>
                                    )
                                })}
                            </Accordian>
                        </Container>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ProductAccordian;

