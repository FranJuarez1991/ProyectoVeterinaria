export const cambiarTituloPagina = (nombrePagina) => {
  switch (nombrePagina) {
    case "PaginaPrincipal":
      document.title = "Pagina Principal";
      break;
    case "PaginaRegistro":
      document.title = "Registro";
      break;
    case "PaginaInicioSesion":
      document.title = "Iniciar Sesion";
      break;
    case "PaginaSobreNosotros":
      document.title = "Sobre Nosotros";
      break;

    default:
      document.title = "ERROR";
      break;
  }
};
