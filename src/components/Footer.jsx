import React from "react";
import logo1 from "../assets/LogoYvette.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="text-center text-muted">
        <div className="row mt-2 text-center">
          <h4>Portafolio</h4>
        </div>
        <div className="text-center text-white p-2">
          © Copyright:
          <a className="text-reset fw-bold" title="/" href="/">
            Yvette Santana
          </a>
        </div>
      </footer>
      <img src={logo1} className="imagenF" alt="logo" />
    </div>
  );
};

export default Footer;
