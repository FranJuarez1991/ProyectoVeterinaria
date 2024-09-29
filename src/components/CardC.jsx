import { Card, Col, Container } from "react-bootstrap";
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
  onProductAdded,
}) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto de Favoritos?"
    );
    if (confirmDelete) {
      const usuarioLogueado =
        JSON.parse(sessionStorage.getItem("usuarios")) || null;
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const posicionUsuario = usuarios.findIndex(
        (usuario) => usuario.id === usuarioLogueado.id
      );

      const posicionProducto = usuarioLogueado.fav.findIndex(
        (prod) => prod.id === idProduct
      );

      if (posicionProducto !== -1) {
        usuarioLogueado.fav.splice(posicionProducto, 1); // Eliminar el producto
        usuarios[posicionUsuario] = usuarioLogueado; // Actualizar el usuario en la lista

        // Guardar los cambios en localStorage y sessionStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        sessionStorage.setItem("usuarios", JSON.stringify(usuarioLogueado));

        // Actualizar el estado de fav en PaginaUsuarioFavoritos
        setFav(usuarioLogueado.fav); // Actualiza el estado en el componente padre

        // Llamar a la función de callback para mostrar mensaje
        onProductAdded(); // Llama a la función para mostrar el mensaje
      }
    }
  };

  return (
    <Col sm="12" md="6" lg="4">
      <Card className="card-producto my-3">
        <Card.Img variant="top" src={urlImage} />
        <Card.Body>
          <Card.Title className="text-truncate">{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Card.Text className="text-truncate">{description}</Card.Text>
          <Container className="d-flex justify-content-between">
            <Link
              className="BotonCard btn btn-success"
              to={`/detalle-producto/${idProduct}`}
            >
              Ver Más
            </Link>
            {idPagina === "fav" && (
              <button className="btn btn-danger ms-3" onClick={handleDelete}>
                Eliminar
              </button>
            )}
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardC;
