import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
      
        <Router>
        <Header />
          <Routes>
            <Route path="/" />
            <Route path="/Acerca" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/Contactame" element={<Contacto />} />
          </Routes>
        </Router>
      </ChakraProvider>
      <Footer />
    </div>
  );
}

export default App;
