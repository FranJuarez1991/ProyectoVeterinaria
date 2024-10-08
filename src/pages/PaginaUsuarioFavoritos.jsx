import { Container, Row, Alert } from "react-bootstrap";
import CardC from "../components/CardC";
import { useState, useEffect } from "react";

const PaginaUsuarioFavoritos = () => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarios")) || null;
    const [fav, setFav] = useState([]);
    const [showMessage, setShowMessage] = useState(false); // Estado para manejar el mensaje

    useEffect(() => {
      if (usuarioLogueado) {
        obtenerFavs();
      }
    }, [usuarioLogueado]);

    const obtenerFavs = () => {
      if (usuarioLogueado && usuarioLogueado.fav) {
        setFav(usuarioLogueado.fav);
      }
    };

    // Función para mostrar el mensaje de añadido a favoritos
    const handleProductAdded = () => {
      setShowMessage(true); // Mostrar el mensaje
      setTimeout(() => {
        setShowMessage(false); // Ocultar el mensaje después de 3 segundos
      }, 3000);
    };

    // Mostrar mensaje si no hay usuario logueado
    if (!usuarioLogueado) {
      return <h2>Producto No encontrado</h2>;
    }

    // Verificamos si fav existe y tiene productos
    if (!fav || fav.length === 0) {
      return (
        <Container className="d-flex flex-column min-vh-100">
          <Row className="justify-content-center my-auto">
            <h1 className="text-center">No tienes productos en favoritos</h1>
          </Row>
        </Container>
      );
    }

    return (
      <Container className="container-spacing mt-5">
        <h2>Sin Productos en Favoritos</h2>
        {showMessage && (
          <Alert variant="success" className="text-center">
            ¡Producto añadido a favoritos!
          </Alert>
        )}
        <Row>
          {fav.map((producto) => (
            <CardC
              key={producto.id}
              urlImage={producto.image}
              title={producto.title}
              price={producto.price}
              description={producto.description}
              idProduct={producto.id}
              idPagina="fav"
              setFav={setFav}
              onProductAdded={handleProductAdded} // Pasamos la función aquí
            />
          ))}
        </Row>
      </Container>
    );
};

export default PaginaUsuarioFavoritos;
