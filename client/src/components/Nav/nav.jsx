import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from '../../img/dog.png';

const Nav = (e) => {
 
  return (
    <>
    
      <div class="fondoNav">
        <Link to="/">
        <div className="let">
        <img  src={logo} width="40" height="40" alt="logo de la pagina"/>
        </div>
        </Link>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div className="let">
            HOME
          </div>
        </Link>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <div className="let">CREAR PERRO</div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
