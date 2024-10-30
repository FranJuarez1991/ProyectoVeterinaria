import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarC = () => {
  const navigate = useNavigate();
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  // Efecto para comprobar el estado de autenticación al cargar el componente
  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem("usuarios"));
    setUsuarioLogueado(usuario);
  }, []);

  const handleLogout = (ev) => {
    ev.preventDefault();

    if (usuarioLogueado) {
      const usuariosLocalStorage =
        JSON.parse(localStorage.getItem("usuarios")) || [];
      const posicionUsuario = usuariosLocalStorage.findIndex(
        (user) => user.id === usuarioLogueado.id
      );

      if (posicionUsuario !== -1) {
        usuariosLocalStorage[posicionUsuario].login = false;
        localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
      }

      sessionStorage.removeItem("usuarios");
      setUsuarioLogueado(null);
      navigate("/");
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <NavLink
          to={
            usuarioLogueado?.role === "usuario"
              ? "/inicio-usuario"
              : usuarioLogueado?.role === "admin"
              ? "/inicio-admin"
              : "/"
          }
        >
          <img
            src="https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249212/LogoVeterinaria_hi01x3.png"
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-top mt-1"
            style={{ marginRight: "10px" }}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to={
                usuarioLogueado?.role === "usuario"
                  ? "/inicio-usuario"
                  : usuarioLogueado?.role === "admin"
                  ? "/inicio-admin"
                  : "/"
              }
              className="nav-link"
            >
              Inicio
            </NavLink>
            {usuarioLogueado?.role !== "admin" && (
              <>
                <NavLink to="/sobre-nosotros" className="nav-link">
                  Sobre Nosotros
                </NavLink>
                <NavLink to="/contacto" className="nav-link">
                  Contacto
                </NavLink>
                <NavLink to="/producto" className="nav-link">
                  Productos
                </NavLink>
                <NavDropdown title="Turnos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Turnos">
                    Reservar Turno
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
            {usuarioLogueado?.role === "admin" && (
              <>
                <NavLink to="/admin/usuarios" className="nav-link">
                  Panel Usuarios
                </NavLink>
                <NavLink to="/admin/productos" className="nav-link">
                  Panel Productos
                </NavLink>
                <NavLink to="/admin/pacientes" className="nav-link">
                  Panel Pacientes
                </NavLink>
                <NavLink to="/inicio-usuario" className="nav-link">
                  Cambiar Vista Usuario
                </NavLink>
              </>
            )}
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            {usuarioLogueado ? (
              <NavLink
                to="#"
                className="nav-link logout"
                onClick={handleLogout}
              >
                Cerrar Sesión
                <img
                  src="https://cdn-icons-png.flaticon.com/512/12208/12208970.png"
                  alt="Favorito"
                  width="50"
                  height="50"
                />
              </NavLink>
            ) : (
              <>
                <NavLink to="/iniciar-sesion" className="nav-link">
                  Iniciar Sesión
                </NavLink>
                <NavLink to="/registro" className="nav-link">
                  Registrarse
                </NavLink>
              </>
            )}
            {usuarioLogueado?.role === "usuario" && (
              <>
                <NavLink to="usuario/favoritos" className="nav-link favorito">
                  <img
                    src="https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249209/Favorito_cvkda3.png"
                    alt="Favorito"
                    width="50"
                    height="50"
                  />
                </NavLink>
                <NavLink to="usuario/carrito" className="nav-link carrito">
                  <img
                    src="https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249208/Carrito_csa9nc.png"
                    alt="Carrito"
                    width="50"
                    height="50"
                  />
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
