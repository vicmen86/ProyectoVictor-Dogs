import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from '../../img/dog.png';

const nav = (e) => {
 
  return (
    <>
    
      <div class="fondoNav">
        <Link to="/">
        <div>
        <img  src={logo} width="40" height="40" alt="logo de la pagina"/>
        </div>
        </Link>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div class="let">
            HOME
          </div>
        </Link>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <div class="let">CREAR PERRO</div>
        </Link>
      </div>
    </>
  );
};

export default nav;
