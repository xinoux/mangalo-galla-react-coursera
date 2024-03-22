import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Navbar from "./components/navbar.js";
import Slider from "./components/slider.js";
import Categories from "./components/categories.js";
import CoreValues from "./components/coreValues.js";
import Footer from "./components/footer.js";


function App() {
  return (
    <div className="Applic">
      <Header />
      <Navbar />
      <Slider />
      <Categories/>
      <CoreValues />
      <Footer />
    </div>
  );
}

export default App;
