import { useNavigate, useParams } from "react-router-dom";
import { useApiFakeStore } from "../helpers/apiFakestore";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import "../css/PaginaDetalleProducto.css";

const PaginaDetalleProducto = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [productoApi, setProductoApi] = useState({});

  // Obtener el producto desde la API
  const obtenerProducto = async () => {
    try {
      const producto = await useApiFakeStore(params.id);
      setProductoApi(producto);
    } catch (error) {
      console.log(error);
    }
  };

  // Manejo de añadir a favoritos
  const handleClickFav = async (idProducto) => {
    const usuarioLogueado =
      JSON.parse(sessionStorage.getItem("usuarios")) || null;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!usuarioLogueado) {
      setTimeout(() => {
        window.alert(
          "Para añadir a Favorito un producto, debera iniciar sesion"
        );
        navigate("/iniciar-sesion");
      }, 500);
      return; // Importante para detener la ejecución
    }

    const productoExiste = usuarioLogueado.fav.find(
      (prod) => prod.id === idProducto
    );
    if (productoExiste) {
      // Usamos window.alert o cualquier librería de alertas
      window.alert("Producto ya está cargado en Favoritos");
      return; // Detenemos la ejecución si el producto ya está en el carrito
    }

    const producto = await useApiFakeStore(idProducto);

    // Verificar si el producto ya está en favoritos para evitar duplicados
    const yaEnFavoritos = usuarioLogueado.fav.some(
      (favProducto) => favProducto.id === producto.id
    );

    if (!yaEnFavoritos) {
      usuarioLogueado.fav.push(producto);
      const posicionUsuario = usuarios.findIndex(
        (usuario) => usuario.id === usuarioLogueado.id
      );
      usuarios[posicionUsuario] = usuarioLogueado;

      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      sessionStorage.setItem("usuarios", JSON.stringify(usuarioLogueado));
    }
  };

  // Manejo de añadir al carrito
  const handleClickCar = async (idProducto) => {
    const usuarioLogueado =
      JSON.parse(sessionStorage.getItem("usuarios")) || null;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!usuarioLogueado) {
      window.alert("Para añadir al carrito un producto, debera iniciar sesion");
      setTimeout(() => {
        navigate("/iniciar-sesion");
      }, 500);
      return; // Importante para detener la ejecución
    }

    const productoExiste = usuarioLogueado.cart.find(
      (prod) => prod.id === idProducto
    );

    if (productoExiste) {
      // Usamos window.alert o cualquier librería de alertas
      window.alert("Producto ya está cargado en el carrito");
      return; // Detenemos la ejecución si el producto ya está en el carrito
    }

    const producto = await useApiFakeStore(idProducto);

    // Verificar si el producto ya está en el carrito para evitar duplicados
    const yaEnCarrito = usuarioLogueado.cart.some(
      (carritoProducto) => carritoProducto.id === producto.id
    );

    if (!yaEnCarrito) {
      usuarioLogueado.cart.push(producto);
      const posicionUsuario = usuarios.findIndex(
        (usuario) => usuario.id === usuarioLogueado.id
      );
      usuarios[posicionUsuario] = usuarioLogueado;

      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      sessionStorage.setItem("usuarios", JSON.stringify(usuarioLogueado));
    }
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
      <main className="detalleprod py-5 mt-0">
        <Container>
          <Row>
            <Col sm="12" md="6" className="col-izq text-center">
              <img src={productoApi?.image} alt="" />
              <p>{productoApi.description}</p>
            </Col>
            <Col
              sm="12"
              md="3"
              className="d-flex justify-content-center align-items-center text-center"
            >
              <div>
                <p className="fs-1">${productoApi?.price}</p>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => handleClickFav(productoApi.id)}
                >
                  Añadir Favoritos
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleClickCar(productoApi.id)}
                >
                  Añadir Carrito
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default PaginaDetalleProducto;
