const Footer = () => {
  return (
    <>
      <footer className="py-5 text-center bg-body-tertiary mt-5">
        <div className="d-flex logo-footer">
          <a href="./pagina_principal.html">
            <img
              src="./img/LogoVeterinaria.png"
              alt="imagen-logofooter"
              style={{ width: 100 }}
            />
          </a>
          <p className="copy">Clínica Veterinaria</p>
        </div>

        <ul className="wrapper">
          <li className="icon facebook">
            <a href="https://www.facebook.com">
              <span className="tooltip">Facebook</span>
              <span>
                <i className="fab fa-facebook-f">
                  <img
                    src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png"
                    alt=""
                    width="50px"
                  />
                </i>
              </span>
            </a>
          </li>
          <li className="icon twitter">
            <a href="https://x.com/">
              <span className="tooltip">Twitter</span>
              <span>
                <i className="fab fa-twitter">
                  <img
                    src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png"
                    alt=""
                    width="100px"
                  />
                </i>
              </span>
            </a>
          </li>
          <li className="icon instagram">
            <a href="https://www.instagram.com/">
              <span className="tooltip">Instagram</span>
              <span>
                <i className="fab fa-instagram">
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

        <div className="contact-info">
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

        <div className="hours">
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

export default Footer;
