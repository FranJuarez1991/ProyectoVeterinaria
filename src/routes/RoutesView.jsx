import { Routes, Route } from "react-router-dom";
import PaginaIniciarSesion from "../pages/PaginaIniciarSesion";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import PaginaRegistro from "../pages/PaginaRegistro";
import NavbarC from "../components/NavbarC";
import Footer from "../components/Footer";
import PaginaError from "../pages/PaginaError";
import PaginaSobreNosotros from "../pages/PaginaSobreNosotros";
import PaginaContacto from "../pages/PaginaContacto";
import PaginaTurno from "../pages/PaginaTurno";
import PaginaDetalleProducto from "../pages/PaginaDetalleProducto";
import PaginaSuscripcion from "../pages/PaginaSuscripcion";
import PaginaProducto from "../pages/PaginaProducto";
import PaginaInicioAdmin from "../pages/PaginaInicioAdmin";
import PaginaInicioUsuario from "../pages/PaginaInicioUsuario";
import PaginaUsuarioFavoritos from "../pages/PaginaUsuarioFavoritos";
import PaginaUsuarioCarrito from "../pages/PaginaUsuarioCarrito";

const RoutesView = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/inicio-admin" element={<PaginaInicioAdmin />} />
        <Route path="/inicio-usuario" element={<PaginaInicioUsuario />} />
        <Route path="/usuario/favoritos" element={<PaginaUsuarioFavoritos />} />
        <Route path="/usuario/carrito" element={<PaginaUsuarioCarrito />} />
        <Route path="/iniciar-sesion" element={<PaginaIniciarSesion />} />
        <Route path="/registro" element={<PaginaRegistro />} />
        <Route path="/sobre-nosotros" element={<PaginaSobreNosotros />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="/Turnos" element={<PaginaTurno />} />
        <Route path="/Suscripcion/:planId" element={<PaginaSuscripcion />} />
        <Route path="/producto" element={<PaginaProducto />} />
        <Route
          path="/detalle-producto/:id"
          element={<PaginaDetalleProducto />}
        />
        <Route path="*" element={<PaginaError />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesView;
