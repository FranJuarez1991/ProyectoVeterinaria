import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "../css/Form.css";

const FormC = ({ idPagina }) => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    usuario: "",
    contrasenia: "",
    rcontrasenia: "",
    Check: false,
  });
  const [formLogin, setFormLogin] = useState({
    usuario: "",
    contrasenia: "",
  });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Efecto para comprobar si el usuario ya está autenticado
  useEffect(() => {
    const storedUser = sessionStorage.getItem("usuarios");
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  // Manejadores de cambios en los formularios
  const handleChangeRegister = (ev) => {
    const { name, value, type, checked } = ev.target;
    setFormRegister({
      ...formRegister,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChangeLogin = (ev) => {
    const { name, value } = ev.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  // Lógica para registrar un usuario
  const handleClickRegister = (ev) => {
    ev.preventDefault();
    const { usuario, contrasenia, rcontrasenia, Check } = formRegister;

    let newErrors = {};
    if (!usuario) newErrors.errorUsuario = true;
    if (!contrasenia) newErrors.errorContrasenia = true;
    if (!rcontrasenia) newErrors.errorRContrasenia = true;
    /*if (!Check) newErrors.errorCheck = true;*/

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setResponseMessage("Por favor, completa todos los campos.");
      return;
    }

    if (contrasenia !== rcontrasenia) {
      setResponseMessage("Las contraseñas no coinciden.");
      return;
    }

    const usuariosLocalStorage =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste = usuariosLocalStorage.find(
      (user) => user.usuario === usuario
    );

    if (usuarioExiste) {
      setResponseMessage("El nombre de usuario ya está en uso.");
      return;
    }

    const nuevoUsuario = {
      id:
        usuariosLocalStorage.length > 0
          ? usuariosLocalStorage[usuariosLocalStorage.length - 1].id + 1
          : 1,
      usuario,
      contrasenia,
      role: "usuario",
      bloqueado: false,
      login: false,
      cart: [],
      fav: [],
    };

    usuariosLocalStorage.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));

    setResponseMessage("Registro exitoso. Redirigiendo...");

    setTimeout(() => {
      navigate("/iniciar-sesion");
    }, 2000);
  };

  // Lógica para iniciar sesión
  const handleClickLogin = (ev) => {
    ev.preventDefault();
    const { usuario, contrasenia } = formLogin;

    if (!usuario || !contrasenia) {
      setResponseMessage("Por favor ingresa tu usuario y contraseña.");
      return;
    }

    const usuariosLocalStorage =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste = usuariosLocalStorage.find(
      (user) => user.usuario === usuario && user.contrasenia === contrasenia
    );

    if (usuarioExiste) {
      sessionStorage.setItem("usuarios", JSON.stringify(usuarioExiste));
      setIsAuthenticated(true); // Actualiza el estado de autenticación

      setResponseMessage("Inicio de sesión exitoso. Redirigiendo...");
      setTimeout(() => {
        navigate("/"); // Cambia la ruta según tu aplicación
      }, 2000);
    } else {
      setResponseMessage("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <Form className="py-5 form-registro">
            {isAuthenticated ? (
              <div className="text-center">
                <h5>¡Bienvenido, {formLogin.usuario}!</h5>
                <Button
                  variant="primary"
                  onClick={() => {
                    sessionStorage.removeItem("usuarios");
                    setIsAuthenticated(false);
                  }}
                >
                  Cerrar sesión
                </Button>
              </div>
            ) : (
              <>
                {idPagina === "registrarse" ? (
                  <>
                    {/* Formulario de Registro */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control
                        name="usuario"
                        type="text"
                        placeholder="Ingresar Usuario"
                        onChange={handleChangeRegister}
                        className={
                          errors.errorUsuario
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      {errors.errorUsuario && (
                        <p className="text-danger">Campo Usuario vacío</p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        name="contrasenia"
                        type="password"
                        placeholder="Password"
                        onChange={handleChangeRegister}
                        className={
                          errors.errorContrasenia
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      {errors.errorContrasenia && (
                        <p className="text-danger">Campo Contraseña vacío</p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Repetir Contraseña</Form.Label>
                      <Form.Control
                        name="rcontrasenia"
                        type="password"
                        placeholder="Repetir Contraseña"
                        onChange={handleChangeRegister}
                        className={
                          errors.errorRContrasenia
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      {errors.errorRContrasenia && (
                        <p className="text-danger">
                          Campo Repetir Contraseña vacío
                        </p>
                      )}
                    </Form.Group>

                    {responseMessage && (
                      <p className="text-info text-center">{responseMessage}</p>
                    )}

                    <div className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClickRegister}
                        className="w-100"
                      >
                        Registrarse
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Formulario de Inicio de Sesión */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control
                        name="usuario"
                        type="text"
                        placeholder="Ingresar Usuario"
                        onChange={handleChangeLogin}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        name="contrasenia"
                        type="password"
                        placeholder="Password"
                        onChange={handleChangeLogin}
                      />
                    </Form.Group>

                    {responseMessage && (
                      <p className="text-info text-center">{responseMessage}</p>
                    )}

                    <div className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClickLogin}
                        className="w-100"
                      >
                        Iniciar Sesión
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormC;
