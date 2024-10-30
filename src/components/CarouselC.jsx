import Carousel from "react-bootstrap/Carousel";

const CarouselC = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249208/Carrousel1_bn8cht.jpg"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3 style={{ color: "blue" }}>
              Quien ama a los animales Ama al ser humano
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249208/Carrousel2_odkwus.jpg"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3 style={{ color: "blue" }}>
              "Vacuna a tu peludo para que este sano y fuerte"
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dx4gdjmxy/image/upload/v1730249208/Carrousel3_yeazok.jpg"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselC;
