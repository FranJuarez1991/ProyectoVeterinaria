import CardC from "../components/CardC";
import "../css/Principal.css";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
import { useApiFakeStore } from "../helpers/apiFakestore";
import { useEffect, useState } from "react";

const PaginaProducto = () => {
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
    <>
      <main>
        <br />
        <h2 className="text-center my-5">Tienda de Productos</h2>
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

export default PaginaProducto;
