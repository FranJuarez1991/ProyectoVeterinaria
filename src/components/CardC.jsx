import { Card, Col, Container, Button } from "react-bootstrap";
import "../css/CardC.css";
import { Link } from "react-router-dom";

const CardC = ({
  urlImage,
  title,
  price,
  description,
  idProduct,
  idPagina,
  setFav,
  setCart,
  onProductDeleted, // Nueva función para manejar el mensaje de eliminación
}) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto?"
    );

    if (confirmDelete) {
      const usuarioLogueado =
        JSON.parse(sessionStorage.getItem("usuarios")) || null;
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const posicionUsuario = usuarios.findIndex(
        (usuario) => usuario.id === usuarioLogueado.id
      );

      // Determinamos qué lista modificar: carrito o favoritos
      const listaObjetivo = idPagina === "cart" ? "cart" : "fav";

      // Filtrar el producto que queremos eliminar
      const nuevaLista = usuarioLogueado[listaObjetivo].filter(
        (prod) => prod.id !== idProduct
      );

      if (nuevaLista.length !== usuarioLogueado[listaObjetivo].length) {
        // Actualizar la lista correspondiente en el usuario logueado
        usuarioLogueado[listaObjetivo] = nuevaLista;

        // Actualizar la lista de usuarios
        usuarios[posicionUsuario] = usuarioLogueado;

        // Guardar los cambios en localStorage y sessionStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        sessionStorage.setItem("usuarios", JSON.stringify(usuarioLogueado));

        // Actualizar el estado en el componente padre
        if (listaObjetivo === "cart") {
          setCart([...nuevaLista]); // Actualiza el estado del carrito
        } else {
          setFav([...nuevaLista]); // Actualiza el estado de favoritos
        }

        // Llamar a la función de callback para mostrar el mensaje de eliminación
        if (onProductDeleted) {
          onProductDeleted(); // Llama a la función cuando el producto es eliminado
        }
      } else {
        alert("Producto no encontrado en la lista.");
      }
    }
  };

  const handleBuy = () => {
    alert("¡Producto comprado con éxito!");
    // Aquí puedes implementar la lógica de compra
  };

  return (
    <Col sm="12" md="6" lg="4">
      <Card className="card-producto my-3">
        <Card.Img variant="top" src={urlImage} />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Card.Text className="text-truncate">{description}</Card.Text>

          <Container className="d-flex justify-content-between align-items-center mt-3">
            <Link
              className="BotonCard btn btn-success me-1 w-100"
              to={`/detalle-producto/${idProduct}`}
            >
              Ver Más
            </Link>

            {/* Mostrar botones solo en la página del carrito o favoritos */}
            {idPagina === "cart" || idPagina === "fav" ? (
              <div className="d-flex">
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={handleDelete}
                >
                  Eliminar
                </Button>
                {idPagina === "cart" && (
                  <Button variant="primary" onClick={handleBuy}>
                    Comprar
                  </Button>
                )}
              </div>
            ) : null}
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardC;
