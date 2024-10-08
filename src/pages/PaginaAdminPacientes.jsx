import { Container, Row, Col } from "react-bootstrap";
import TableC from "../components/TableC";
import { useEffect, useState } from "react";

const PaginaAdminPacientes = () => {
  const [turnos, setTurnos] = useState([]);

  const obtenerTurnos = () => {
    // Obtiene todos los usuarios desde el localStorage
    const turnosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    // Filtra y acumula todos los turnos de los usuarios
    const todosLosTurnos = turnosLs.flatMap((usuario) => usuario.tur || []);
    setTurnos(todosLosTurnos);
  };

  useEffect(() => {
    obtenerTurnos();
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
              <TableC array={turnos} idPagina={"turnos"} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaginaAdminPacientes;
