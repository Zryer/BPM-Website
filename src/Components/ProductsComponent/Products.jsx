import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import { PRODUCT } from '../../Assets/Data/PRODUCT';
import Card from 'react-bootstrap/Card';

const Products = () => {

    const { id } = useParams();
    const product = PRODUCT.find(element => element.name == id)

    return (
            <Container className="mainContainer" fluid>
                <Row>
                    <Col>
                        {id}
                    </Col>
                </Row>
                <Row>
                    {product.data.map((element) => {
                        return (
                            <Col key={element.id} xs={6} as={Link} style={{textDecoration: "none"}} to={`/Products/${id}/${element.name}`}>
                                <Card style={{ marginTop: "1.5rem"}}>
                                    <Card.Img />
                                    <Card.Body>
                                        <Card.Title>
                                            {element.name}
                                        </Card.Title>
                                        <Card.Text>
                                            Price: {element.price}
                                            <br />
                                            Calories: {element.calorie}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
    )
}

export default Products;