import Accordian from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { PRODUCTS } from "../../Assets/Data/PRODUCTS";
import { PRODUCT } from "../../Assets/Data/PRODUCT";

const ProductAccordian = () => {
   let arr = []; 
    PRODUCT.forEach((product) => {
        for (let i = 0; i < product.data.length; i++){
            if(product.data[i].name) {
                arr.push(product.data[i].name)
            } else {
                console.log("nothing")
            }

        }

    })
    console.log(arr)
    return (
        <Container>
            <Row>
                {PRODUCTS.map((products) => {
                    return (
                        <>
                            <h1 key={products.id}>{`${products.name}`}</h1>
                            <Accordian>
                                {arr.map((product) => {
                                    return (
                                        <Accordian.Item key={product.id} eventKey={`${product.id}`}>
                                            <Accordian.Header>
                                                {arr.shift()}
                                            </Accordian.Header>
                                            <Accordian.Body style={{ display: "flex", flexDirection: "row", }}>
                                                <Col>
                                                    Price: { } Calories: {product.calorie}
                                                </Col>
                                                <Col style={{ display: "flex", justifyContent: "flex-end" }}>
                                                    <Button>{"->"}</Button>
                                                </Col>
                                            </Accordian.Body>
                                        </Accordian.Item>
                                    )
                                })}
                            </Accordian>
                        </>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ProductAccordian;

