export const useApiFakeStore = async (idProducto) => {
  try {
    /*resolve - resuelto */
    const productos = await fetch(
      idProducto
        ? `https://fakestoreapi.com/products/${idProducto}`
        : "https://fakestoreapi.com/products"
    );
    const data = await productos.json();
    console.log(data);
    return data;
  } catch (error) {
    /*reject  - rechazar */
    return error;
  }
};
