import { Container, Row, Alert } from "react-bootstrap";
import CardC from "../components/CardC";
import { useState, useEffect } from "react";

const PaginaUsuarioCarrito = () => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarios")) || null;
  const [cart, setCart] = useState([]); // Cambiado fav a cart
  const [showMessage, setShowMessage] = useState(false); // Estado para manejar el mensaje

  // Cargar el carrito del usuario logueado
  useEffect(() => {
    if (usuarioLogueado) {
      obtenerCart();
    }
  }, [usuarioLogueado]);

  const obtenerCart = () => {
    if (usuarioLogueado && usuarioLogueado.cart) {
      setCart(usuarioLogueado.cart);
    }
  };

  // Función para añadir productos al carrito
  const handleAddToCart = (producto) => {
    const carritoActualizado = [...cart, producto]; // Añadir el nuevo producto al carrito
    setCart(carritoActualizado);

    // Actualizar el carrito en sessionStorage
    const usuarioActualizado = { ...usuarioLogueado, cart: carritoActualizado };
    sessionStorage.setItem("usuarios", JSON.stringify(usuarioActualizado));

    // Mostrar el mensaje de éxito
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  // Mostrar mensaje si no hay usuario logueado
  if (!usuarioLogueado) {
    return <h2>No estás logueado. No se puede acceder al carrito.</h2>;
  }

  // Verificamos si el carrito tiene productos
  if (!cart || cart.length === 0) {
    return (
      <Container className="d-flex flex-column min-vh-100">
        <Row className="justify-content-center my-auto">
          <h1 className="text-center">No tienes productos en el Carrito</h1>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="container-spacing mt-5">
      <h2>Productos en el Carrito</h2>
      {showMessage && (
        <Alert variant="success" className="text-center">
          ¡Producto añadido al Carrito!
        </Alert>
      )}
      <Row>
        {cart.map((producto) => (
          <CardC
            key={producto.id}
            urlImage={producto.image}
            title={producto.title}
            price={producto.price}
            description={producto.description}
            idProduct={producto.id}
            idPagina="cart"
            setCart={setCart}
            onProductAdded={() => handleAddToCart(producto)} // Pasamos la función aquí
          />
        ))}
      </Row>
    </Container>
  );
};

export default PaginaUsuarioCarrito;
