import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importa la librería EmailJS
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"; // Importa componentes de react-bootstrap
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
import "../css/Suscripcion.css"; // Asegúrate de agregar tus estilos personalizados aquí

const PaginaSuscripcion = ({ planId }) => {
  cambiarTituloPagina("PagSuscripcion");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    celular: "", // Nuevo campo para el celular
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validación de los campos del formulario
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "El nombre es obligatorio.";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "El correo electrónico es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "El correo electrónico no es válido.";
      isValid = false;
    }

    if (!formData.celular) {
      formErrors.celular = "El número de celular es obligatorio.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.celular)) {
      formErrors.celular = "El número de celular debe tener 10 dígitos.";
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = "El mensaje es obligatorio.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Función para enviar el correo usando EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_chh53es", // Reemplaza con el ID de tu servicio en EmailJS
          "template_s84bjso", // Reemplaza con el ID de tu plantilla en EmailJS
          e.target,
          "LTYXk_ASMFAikm7HL" // Reemplaza con tu User ID de EmailJS
        )
        .then(
          (result) => {
            alert(
              "Consulta enviada correctamente, nos pondremos en contacto pronto."
            );
            setFormData({ name: "", email: "", celular: "", message: "" }); // Limpiar formulario
          },
          (error) => {
            alert("Error al enviar la consulta, intenta nuevamente.");
          }
        );
    }
  };

  return (
    <div className="suscripcion-background">
      {" "}
      {/* Fondo personalizado */}
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", padding: "20px" }} // Añadir padding a la vista general
      >
        <Row className="w-100">
          <Col lg={{ span: 8, offset: 2 }}>
            {" "}
            {/* Aumentar el tamaño de la columna */}
            <Card className="p-5 shadow-lg custom-card">
              {" "}
              {/* Aplicar clase personalizada */}
              <Card.Body>
                <h2 className="text-center mb-4">Consulta sobre el Plan</h2>
                <Form onSubmit={sendEmail} noValidate>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      isInvalid={!!errors.name} // Mostrar error si existe
                      style={{ height: "50px" }} // Aumentar la altura del input
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      isInvalid={!!errors.email}
                      style={{ height: "50px" }} // Aumentar la altura del input
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formCelular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      type="text"
                      name="celular"
                      value={formData.celular}
                      onChange={handleInputChange}
                      isInvalid={!!errors.celular}
                      style={{ height: "50px" }} // Aumentar la altura del input
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.celular}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6} // Aumentar el número de filas
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      isInvalid={!!errors.message}
                      style={{ height: "150px" }} // Aumentar la altura del textarea
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ height: "50px" }}
                  >
                    Enviar Consulta
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaginaSuscripcion;
