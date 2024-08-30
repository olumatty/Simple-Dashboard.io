import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
        <form class="nav_form" role="search">
          <input class="form_control" type="search" placeholder="Buscar" />
        </form>
        <ul className="nav_menu">
          <li>
            <a href="#">Logistics</a>
          </li>
          <li>
            <a href="#">Commercial</a>
          </li>
          <li>
            <a href="#">Fabrica</a>
          </li>
          <li>
            <a href="#">Financeiro</a>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
