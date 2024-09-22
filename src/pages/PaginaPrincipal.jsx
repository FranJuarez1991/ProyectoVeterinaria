import CarouselC from "../components/CarouselC";
import CardC from "../components/CardC";
import "../css/Principal.css";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";

const PaginaPrincipal = () => {
  /*JS- Logica del componente */
  cambiarTituloPagina("PaginaPrincipal");
  return (
    /*Fragments */
    <>
      <CarouselC />
      <main>
        <h2 className="text-center my-5">Nuestros Planes</h2>
        <div className="container">
          <div className="row">
            <CardC />
            <CardC />
            <CardC />
          </div>
        </div>
      </main>
    </>
  );
};

export default PaginaPrincipal;
