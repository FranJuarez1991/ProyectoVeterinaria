import { Routes, Route } from "react-router-dom";
import PaginaIniciarSesion from "../pages/PaginaIniciarSesion";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import PaginaRegistro from "../pages/PaginaRegistro";
import NavbarC from "../components/NavbarC";
import Footer from "../components/Footer";
import PaginaError from "../pages/PaginaError";
import PaginaSobreNosotros from "../pages/PaginaSobreNosotros";
import PaginaContacto from "../pages/PaginaContacto";

const RoutesView = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/iniciar-sesion" element={<PaginaIniciarSesion />} />
        <Route path="/registro" element={<PaginaRegistro />} />
        <Route path="/sobre-nosotros" element={<PaginaSobreNosotros />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="*" element={<PaginaError />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesView;
