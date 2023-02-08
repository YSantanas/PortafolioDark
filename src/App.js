import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contactame" element={<Contacto />} />
          </Routes>
        </Router>
      </ChakraProvider>
      <Footer />
    </div>
  );
}

export default App;
