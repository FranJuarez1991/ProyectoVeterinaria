import CarouselC from "../components/CarouselC";
import CardC from "../components/CardC";
import "../css/Principal.css";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
import { useApiFakeStore } from "../helpers/apiFakestore";
import { useEffect, useState } from "react";

/*use - hooks = funcion / metodo */
const PaginaPrincipal = () => {
  /*JS- Logica del componente */
  /*const [estado, funcionqueseteaelvalordelestado] = useState([estado, setEstado]); */
  const [productosApi, setProductosApi] = useState([]);
  cambiarTituloPagina("PaginaPrincipal");

  const obtenerProductos = async () => {
    try {
      const productos = await useApiFakeStore();
      setProductosApi(productos);
    } catch (error) {}
  };
  /*Inicializa - monta -actualiza - desmonta */
  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    /*Fragments */
    <>
      <CarouselC />
      <main>
        <h2 className="text-center my-5">Nuestros Planes</h2>
        <div className="container">
          <div className="row">
            {productosApi.map((producto) => (
              <CardC
                key={producto.id}
                urlImage={producto.image}
                title={producto.title}
                price={producto.price}
                description={producto.description}
                idProduct={producto.id}
              /> /*key diferencia los componentes que se mapean  */
            ))}
            {/*<CardC urlImage={"./img/05.jpeg"} />
            <CardC urlImage={"./img/5-10.jpeg"} />
            <CardC urlImage={"./img/10mas.jpg"} />*/}
          </div>
        </div>
      </main>
    </>
  );
};

export default PaginaPrincipal;
