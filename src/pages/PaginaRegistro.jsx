import FormC from "../components/FormC";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";

const PaginaRegistro = () => {
  cambiarTituloPagina("PaginaRegistro");
  return (
    <>
      <br />
      <div className="d-flex justify-content-center py-5">
        <FormC />
      </div>
    </>
  );
};

export default PaginaRegistro;