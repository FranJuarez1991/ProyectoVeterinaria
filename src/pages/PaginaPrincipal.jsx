import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

const PaginaPrincipal = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <main>
        <h2 className="text-center my-5">Nuestros Planes</h2>
        <div className="container">
          <div className="row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaginaPrincipal;
