import { Container, Row, Col } from "react-bootstrap";
import TableC from "../components/TableC";
import { useEffect, useState } from "react";

const PaginaAdminUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = () => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosLs);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <br />
      <br />
      <br />
      {/* Contenido principal */}
      <Container fluid className="flex-grow-1 my-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="table-responsive">
              <TableC array={usuarios} idPagina={"usuarios"} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaginaAdminUsuario;
