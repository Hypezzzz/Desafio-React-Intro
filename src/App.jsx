import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import image1 from "./assets/cardImg/departamento.jpg";
import image2 from "./assets/cardImg/casa.jpg";
import image3 from "./assets/cardImg/hotel.jpg";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React" />
      <Card
        title="Departamento"
        description="Se ubica en Cerrillos"
        url={image1}
      />
      <Card title="Casa" description="Se ubica en Valdivia" url={image2} />
      <Card title="Hotel" description="Se ubica en Santiago" url={image3} />
      <Footer />
    </>
  );
}

export default App;
