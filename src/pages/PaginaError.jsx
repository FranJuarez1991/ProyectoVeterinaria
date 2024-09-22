import { cambiarTituloPagina } from "../helpers/CambiarTitulo";

const PaginaError = () => {
  cambiarTituloPagina("Error");
  return (
    <>
      <h2>Pagina No encontrada :)</h2>
    </>
  );
};

export default PaginaError;
