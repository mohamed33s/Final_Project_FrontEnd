import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavFooter from "./Component/NavFooterBar";
import Index from "./Component/Home";
import ServiceProv from "./Component/ServiceProviders";
import Register from "./Component/Register";
import Rating from "./Component/Rating&Comment";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavFooter />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<ServiceProv />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
