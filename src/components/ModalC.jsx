import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalC = ({ titulo, item, idPagina, handleClose, show }) => {
  const [formData, setFormData] = useState({});

  // Cargar los datos del item seleccionado cuando se abre el modal
  useEffect(() => {
    if (item) {
      setFormData({
        ...item,
        bloqueado: item.bloqueado ? "bloqueado" : "activo",
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    if (idPagina === "productos") {
      // Actualizar productos
      const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
      const index = productosLs.findIndex((prod) => prod.id === item.id);
      productosLs[index] = {
        ...formData,
        bloqueado: formData.bloqueado === "bloqueado",
      };
      localStorage.setItem("productos", JSON.stringify(productosLs));
    } else if (idPagina === "usuarios") {
      // Actualizar usuarios
      const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
      const index = usuariosLs.findIndex((usr) => usr.id === item.id);
      usuariosLs[index] = {
        ...formData,
        bloqueado: formData.bloqueado === "bloqueado",
      };
      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
    } else if (idPagina === "turnos") {
      // Actualizar turnos
      const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioIndex = usuariosLs.findIndex((usr) =>
        usr.tur.find((t) => t.id === item.id)
      );

      if (usuarioIndex !== -1) {
        const turnoIndex = usuariosLs[usuarioIndex].tur.findIndex(
          (t) => t.id === item.id
        );
        usuariosLs[usuarioIndex].tur[turnoIndex] = {
          ...formData,
        };
        localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
      }
    }

    handleClose();
    window.location.reload();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {titulo ||
            `Editar ${
              idPagina === "productos"
                ? "Producto"
                : idPagina === "usuarios"
                ? "Usuario"
                : "Turno"
            }`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {idPagina === "productos" ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={formData.image || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          ) : idPagina === "usuarios" ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="usuario"
                  value={formData.usuario || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rol</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  value={formData.role || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  name="bloqueado"
                  value={formData.bloqueado}
                  onChange={handleChange}
                >
                  <option value="activo">Activo</option>
                  <option value="bloqueado">Bloqueado</option>
                </Form.Select>
              </Form.Group>
            </>
          ) : idPagina === "turnos" ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Detalle</Form.Label>
                <Form.Control
                  type="text"
                  name="detalle"
                  value={formData.detalle || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Veterinario</Form.Label>
                <Form.Control
                  type="text"
                  name="veterinario"
                  value={formData.veterinario || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="mascota"
                  value={formData.mascota || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  name="fecha"
                  value={formData.fecha || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  name="hora"
                  value={formData.hora || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          ) : null}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalC;
