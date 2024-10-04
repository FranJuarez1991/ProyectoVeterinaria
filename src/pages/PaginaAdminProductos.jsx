import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import { Container, Row, Col } from "react-bootstrap";

const PaginaAdminProductos = () => {
  const [productos, setProductos] = useState([]);

  const obtenerTodosLosProductos = async () => {
    const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
    setProductos(productosLs);
  };

  useEffect(() => {
    obtenerTodosLosProductos();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <Container fluid className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="table-responsive">
              <TableC array={productos} idPagina={"productos"} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaginaAdminProductos;
