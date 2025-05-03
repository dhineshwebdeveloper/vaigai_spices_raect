import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Quality from "./pages/Quality";
import OurProducts from "./pages/OurProducts";
import Harvestchart from "./pages/Harvestchart";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Quality" element={<Quality />} />
        <Route path="/OurProducts" element={<OurProducts />} />
        <Route path="/Harvestchart" element={<Harvestchart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
