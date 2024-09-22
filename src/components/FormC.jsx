import { Container } from "react-bootstrap";
import PaginaRegistro from "../pages/PaginaRegistro";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormC = ({ idPagina, nombre }) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="Text" placeholder="Ingresar Usuario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {!idPagina && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        )}
        {!idPagina && (
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Aceptar Terminos y Condiciones"
            />
          </Form.Group>
        )}
        {idPagina === "IniciarSesion" && (
          <Button variant="primary" type="submit">
            Iniciar Sesion
          </Button>
        )}
        {!idPagina && (
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormC;
