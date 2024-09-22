import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

const CardC = () => {
  return (
    <>
      <Col sm="12" md="6" lg="4">
        <Card>
          <Card.Img variant="top" src="./img/05.jpeg" />
          <Card.Body>
            <Card.Title>Primeros Pasos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Suscribirse</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardC;
