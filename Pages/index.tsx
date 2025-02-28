import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-container">
        <h1>Welcome to Hydrological Change Analysis</h1>
        <p>Tracking water level changes using satellite data and AI.</p>

        <section className="home-content">
          <h2>Project Overview</h2>
          <p>
            This project uses satellite imagery and AI to monitor water level changes 
            and their environmental impact. Explore data, visualize changes, and gain insights.
          </p>
        </section>

        <section className="home-links">
          <h3>Explore:</h3>
          <ul>
            <li><a href="/upload">Upload Data</a></li>
            <li><a href="/analysis">View Analysis</a></li>
            <li><a href="/map">Interactive Map</a></li>
            <li><a href="/results">Results & Insights</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
