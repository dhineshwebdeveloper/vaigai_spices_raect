import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Quality from "./pages/Quality";
import OurProducts from "./pages/OurProducts";
import Harvestchart from "./pages/Harvestchart";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Quality" element={<Quality />} />
        <Route path="/OurProducts" element={<OurProducts />} />
        <Route path="/OurProducts/:productId" element={<ProductPage />} />
        <Route path="/Harvestchart" element={<Harvestchart />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 route - should be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
