const Card = () => {
  return (
    <>
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
    </>
  );
};

export default Card;
