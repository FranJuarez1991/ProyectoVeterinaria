import "../css/Contacto.css";
import { useState } from "react"; // Importa useState para manejar el estado del formulario
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PaginaContacto = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Estado para manejar errores de validación
  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Estado para mostrar mensaje de éxito
  const [successMessage, setSuccessMessage] = useState("");

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Limpia el error al modificar el campo
    });
  };

  // Validación del formulario
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Validar el nombre
    if (!formData.nombre) {
      newErrors.nombre = "El campo nombre es obligatorio.";
      valid = false;
    }

    // Validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
    if (!formData.email) {
      newErrors.email = "El campo correo electrónico es obligatorio.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
      valid = false;
    }

    // Validar el mensaje
    if (!formData.mensaje) {
      newErrors.mensaje = "El campo mensaje es obligatorio.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Validar el formulario antes de enviar
    if (validateForm()) {
      // Si es válido, puedes enviar los datos o hacer cualquier otra acción
      console.log("Formulario enviado:", formData);

      // Muestra el mensaje de éxito
      setSuccessMessage("¡Formulario enviado exitosamente!");

      // Reiniciar el formulario si es necesario
      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });
    }
  };

  return (
    <main>
      <br />
      <Container className="mt-5">
        <Row className="contact-page">
          {/* Formulario de contacto */}
          <Col lg={6} md={12} className="mb-5">
            <h2>Contáctanos</h2>
            <Form method="post" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombre}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electrónico:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  isInvalid={!!errors.mensaje}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mensaje}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>

              {/* Mensaje de éxito */}
              {successMessage && (
                <p className="text-success mt-3">{successMessage}</p>
              )}
            </Form>
          </Col>

          {/* Información de contacto */}
          <Col lg={6} md={12}>
            <h2>Información de Contacto</h2>
            <p>
              Dirección: Gral. Jose Maria Paz 700, San Miguel de Tucumán,
              Argentina <br />
              Teléfono: +54 3815396107 <br />
              Correo electrónico: clinicavetodie@gmail.com
            </p>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2568148587254!2d-65.2073616!3d-26.8384204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942c3b6e5e4fbd81%3A0xf9b7e2e28f5124c3!2sGeneral%20Paz%20700%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1662587692511!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default PaginaContacto;
