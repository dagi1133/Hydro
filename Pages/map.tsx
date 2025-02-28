import Header from "../components/Header";
import Footer from "../components/Footer";

const MapPage = () => {
  return (
    <>
      <Header />
      <main className="page-container">
        <h1>Interactive Hydrological Map</h1>
        <p>Displaying water body changes using satellite data.</p>
      </main>
      <Footer />
    </>
  );
};

export default MapPage;
