import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { PRODUCT } from "../../Assets/Data/PRODUCT";

const Product = () => {

    const { id } = useParams();
    const pro =
        PRODUCT.map((ele) => {
            return (
                ele.data.find(element => element.name == id)
            )
        })
    console.log(pro[0])
    console.log(id)
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>{pro[0].name}</h1>
                    <h1>{pro[0].calorie}</h1>
                    <h1>{pro[0].price}</h1>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Product;