import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#1e263233",
        borderRadius: "50px",
      }}
    >
      <div className="row py-2">
        <NavLink
          className="link-styles col-lg-3 col-6  text-decoration-none"
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link-styles col-lg-3 col-6  text-decoration-none ${
              isActive ? "link-styles-active" : ""
            }`
          }
          to="/acerca"
        >
          Acerca
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link-styles col-lg-3 col-6  text-decoration-none ${
              isActive ? "link-styles-active" : ""
            }`
          }
          to="/proyectos"
        >
          Proyectos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `link-styles col-lg-3 col-6  text-decoration-none ${
              isActive ? "link-styles-active" : ""
            }`
          }
          to="/contactame"
        >
          Contactame
        </NavLink>
      </div>
    </div>
  );
};
