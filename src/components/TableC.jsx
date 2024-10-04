import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import ModalC from "../components/ModalC";

const TableC = ({ array, idPagina }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarios")) || null;

  const handleClickDeleteUser = (idUsuario) => {
    const confirmarBorradoUsuario = confirm(
      "¿Estas seguro de que deseas eliminar a este usuario?"
    );
    if (confirmarBorradoUsuario) {
      const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
      const posicionUsuario = usuariosLs.findIndex(
        (usuario) => usuario.id === idUsuario
      );
      if (posicionUsuario < 0) {
        return alert("ID incorrecto");
      }
      usuariosLs.splice(posicionUsuario, 1);
      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
      window.location.reload();
    }
  };
  const handleClickDeleteProduct = (idUsuario) => {
    const confirmarBorradoProducto = confirm(
      "¿Estas seguro de que deseas eliminar a este producto?"
    );
    if (confirmarBorradoUsuario) {
      const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
      const posicionUsuario = usuariosLs.findIndex(
        (usuario) => usuario.id === idUsuario
      );
      if (posicionUsuario < 0) {
        return alert("ID incorrecto");
      }
      usuariosLs.splice(posicionUsuario, 1);
      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
      window.location.reload();
    }
  };
  const handleClickDeleteTurno = (idTurno) => {
    const confirmarBorradoTurno = confirm(
      "¿Estas seguro de que deseas eliminar a este producto?"
    );
    if (confirmarBorradoTurno) {
      const turnosLs = JSON.parse(localStorage.getItem("turnos")) || [];
      const posicionTurno = turnosLs.findIndex((turno) => turno.id === idTurno);
      if (posicionTurno < 0) {
        return alert("ID incorrecto");
      }
      usuariosLs.splice(posicionTurno, 1);
      localStorage.setItem("turnos", JSON.stringify(turnosLs));
      window.location.reload();
    }
  };

  /* Habilitar o Deshabilitar un usuario */
  const handleClickDesabledUser = (idUsuario) => {
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    const posicionUsuario = usuariosLs.findIndex(
      (usuario) => usuario.id === idUsuario
    );

    if (posicionUsuario < 0) {
      return alert("ID incorrecto");
    }

    // Si está bloqueado, se habilita, de lo contrario se deshabilita
    const estadoActual = usuariosLs[posicionUsuario].bloqueado;
    const confirmarAccion = confirm(
      `¿Estás seguro de que deseas ${
        estadoActual ? "habilitar" : "deshabilitar"
      } a este usuario?`
    );

    if (confirmarAccion) {
      usuariosLs[posicionUsuario].bloqueado = !estadoActual; // Cambia el estado
      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
      window.location.reload(); // Actualizar la tabla
    }
  };

  /* Habilitar o Deshabilitar un producto */
  const handleClickDesabledProduct = (idProducto) => {
    const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
    const posicionProducto = productosLs.findIndex(
      (producto) => producto.id === idProducto
    );

    if (posicionProducto < 0) {
      return alert("ID incorrecto");
    }

    // Si está bloqueado, se habilita, de lo contrario se deshabilita
    const estadoActual = productosLs[posicionProducto].bloqueado;
    const confirmarAccion = confirm(
      `¿Estás seguro de que deseas ${
        estadoActual ? "habilitar" : "deshabilitar"
      } a este producto?`
    );

    if (confirmarAccion) {
      productosLs[posicionProducto].bloqueado = !estadoActual; // Cambia el estado
      localStorage.setItem("productos", JSON.stringify(productosLs));
      window.location.reload(); // Actualizar la tabla
    }
  };

  const handleClickEdit = (item) => {
    setSelectedItem(item); // Guarda el item seleccionado (usuario o producto)
    setModalShow(true); // Muestra el modal
  };

  const handleCloseModal = () => {
    setModalShow(false); // Cierra el modal
    setSelectedItem(null); // Resetea el item seleccionado
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          {idPagina === "usuarios" ? (
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Bloqueado</th>
              <th>Opciones</th>
            </tr>
          ) : idPagina === "productos" ? (
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          ) : (
            <tr>
              <th>ID</th>
              <th>Detalle</th>
              <th>Veterinario</th>
              <th>Mascota</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acciones</th>
            </tr>
          )}
        </thead>
        <tbody>
          {idPagina === "usuarios"
            ? array
                .filter((usuario) => usuario.id !== usuarioLogueado?.id)
                .map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.usuario}</td>
                    <td>{usuario.role}</td>
                    <td>{usuario.bloqueado ? "Bloqueado" : "Activo"}</td>
                    <td>
                      <div className="d-flex justify-content-start">
                        <button
                          className="btn btn-warning me-1"
                          onClick={() => handleClickEdit(usuario)} // Muestra el modal
                        >
                          <i className="bi bi-pencil-square"></i> Editar
                        </button>
                        <button
                          className="btn btn-danger me-1"
                          onClick={() => handleClickDeleteUser(usuario.id)}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                        <button
                          className={
                            usuario.bloqueado
                              ? "btn btn-success"
                              : "btn btn-secondary me-1"
                          }
                          onClick={() => handleClickDesabledUser(usuario.id)}
                        >
                          <i className="bi bi-slash-circle"></i>
                          {usuario.bloqueado ? "Habilitar" : "Deshabilitar"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
            : idPagina === "productos"
            ? array.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.title}</td>
                  <td>{producto.description}</td>
                  <td>${producto.price}</td>
                  <td>
                    <img src={producto.image} alt={producto.title} width="50" />
                  </td>
                  <td>
                    <div className="d-flex justify-content-start">
                      <button
                        className="btn btn-warning me-1"
                        onClick={() => handleClickEdit(producto)} // Muestra el modal
                      >
                        <i className="bi bi-pencil-square"></i> Editar
                      </button>
                      <button
                        className="btn btn-danger me-1"
                        onClick={() => handleClickDeleteProduct(producto.id)}
                      >
                        <i className="bi bi-trash"></i> Eliminar
                      </button>
                      <button
                        className={
                          producto.bloqueado
                            ? "btn btn-success"
                            : "btn btn-secondary me-1"
                        }
                        onClick={() => handleClickDesabledProduct(producto.id)}
                      >
                        <i className="bi bi-slash-circle"></i>
                        {producto.bloqueado ? "Habilitar" : "Deshabilitar"}
                      </button>

                      <button className="btn btn-success">
                        <i className="bi bi-star"></i> Destacar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : array.map((turno) => (
                <tr key={turno.id}>
                  <td>{turno.id}</td>
                  <td>{turno.detalle}</td>
                  <td>{turno.veterinario}</td>
                  <td>{turno.mascota}</td>
                  <td>{turno.fecha}</td>
                  <td>{turno.hora}</td>
                  <td>
                    <div className="d-flex justify-content-start">
                      <button
                        className="btn btn-warning me-1"
                        onClick={() => handleClickEdit(turno)} // Muestra el modal
                      >
                        <i className="bi bi-pencil-square"></i> Editar
                      </button>
                      <button
                        className="btn btn-danger me-1"
                        onClick={() => handleClickDeleteTurno(turno.id)} // Eliminar turno
                      >
                        <i className="bi bi-trash"></i> Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>

      {/* ModalC */}
      <ModalC
        show={modalShow} // Controla si el modal está visible
        handleClose={handleCloseModal} // Función para cerrar el modal
        item={selectedItem} // Pasa el item seleccionado (usuario, producto o turno) al modal
        titulo="Editar Datos" // Título del modal
        idPagina={idPagina} // Para distinguir entre usuario, producto y turno
      />
    </>
  );
};

export default TableC;
