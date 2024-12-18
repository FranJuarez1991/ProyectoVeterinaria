import CarouselC from "../components/CarouselC";
import CardC from "../components/CardC";
import "../css/Principal.css";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
import { useApiFakeStore } from "../helpers/apiFakestore";
import { useEffect, useState } from "react";
import CardPlanesC from "../components/CardPlanesC";
import ReseñasCarousel from "../components/CarrouselReseñaC";

const PaginaPrincipal = () => {
  const [productosApi, setProductosApi] = useState([]);
  cambiarTituloPagina("PaginaPrincipal");

  const obtenerProductos = async () => {
    try {
      const productos = await useApiFakeStore();
      setProductosApi(productos);
      localStorage.setItem("productos", JSON.stringify(productos)); //se envia al LS para controlar el borrado
    } catch (error) {
      console.error("Error al obtener los productos: ", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <CarouselC />
      <main>
        <h2 className="text-center my-5">Nuestros Productos</h2>
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
              />
            ))}
          </div>
        </div>
        <h2 className="text-center my-5">Nuestros Planes</h2>
        <div className="container">
          <div className="row">
            <CardPlanesC
              title={"Primeros Pasos "}
              price={"15000 x MES"}
              urlImage={"https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249207/05_z4kvky.jpg"}
              description={"servicios para mascotas de 0 a 5 años"}
            />
            <CardPlanesC
              title={"Madurando "}
              price={"25000 x MES"}
              urlImage={"https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249207/5-10_hd0kbx.jpg"}
              description={"servicios para mascotas de 5 a 10 años"}
            />
            <CardPlanesC
              title={"Adultos "}
              price={"30000 x MES"}
              urlImage={"https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249208/10mas_de7u6d.jpg"}
              description={"servicios para mascotas de más de 10 años"}
            />
          </div>
        </div>
      </main>
      <ReseñasCarousel />
    </>
  );
};

export default PaginaPrincipal;
