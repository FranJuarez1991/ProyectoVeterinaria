const App = () => {
  return (
    /*Fragments - etiquetas vacias */
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./img/LogoVeterinaria.png"
              alt="logo"
              style={{ width: 100 }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Iniciar Sesion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Registrarse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./img/Carrousel1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img/Carrousel2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img/Carrousel3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h2 className="text-center my-5">Nuestros Planes</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src="./img/05.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Plan Primeros Pasos</h5>
                  <p className="card-text">
                    Servicio para mascotas hasta los 5 años.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Suscribirse
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src="./img/5-10.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Plan Madurando</h5>
                  <p className="card-text">
                    Servicio para mascotas de 5 a 10 años.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Suscribirse
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src="./img/10mas.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Plan Adultos</h5>
                  <p className="card-text">
                    Servicio para mascotas mayor a 10 años.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Suscribirse
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-5 text-center bg-body-tertiary mt-5">
        <div class="d-flex logo-footer">
          <a href="./pagina_principal.html">
            <img
              src="./img/LogoVeterinaria.png"
              alt="imagen-logofooter"
              style={{ width: 100 }}
            />
          </a>
          <p class="copy">Clínica Veterinaria</p>
        </div>

        <ul class="wrapper">
          <li class="icon facebook">
            <a href="https://www.facebook.com">
              <span class="tooltip">Facebook</span>
              <span>
                <i class="fab fa-facebook-f">
                  <img
                    src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png"
                    alt=""
                    width="50px"
                  />
                </i>
              </span>
            </a>
          </li>
          <li class="icon twitter">
            <a href="https://x.com/">
              <span class="tooltip">Twitter</span>
              <span>
                <i class="fab fa-twitter">
                  <img
                    src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png"
                    alt=""
                    width="100px"
                  />
                </i>
              </span>
            </a>
          </li>
          <li class="icon instagram">
            <a href="https://www.instagram.com/">
              <span class="tooltip">Instagram</span>
              <span>
                <i class="fab fa-instagram">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/018/930/413/small_2x/instagram-logo-instagram-icon-transparent-free-png.png"
                    alt=""
                    width="100px"
                  />
                </i>
              </span>
            </a>
          </li>
        </ul>

        <div class="contact-info">
          <p>
            <strong>Dirección:</strong> 9 de Julio 740, San Miguel de Tucumán
          </p>
          <p>
            <strong>Teléfono:</strong> (0381)-4551542
          </p>
          <p>
            <strong>Email:</strong> clinicavetodie@gmail.com
          </p>
        </div>

        <div class="hours">
          <p>
            <strong>Horarios de atención:</strong>
          </p>
          <p>Lunes a Viernes: 9:00 AM - 20:00 PM</p>
          <p>Sábados: 9:00 AM - 2:00 PM</p>
          <p>Domingos: Cerrado</p>
        </div>
      </footer>
    </>
  );
};

export default App;
