import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import Clip from '../../img/Produce.mp4';

const Landing = () => {
  return (
    <div className="body">
      <video src={Clip} autoPlay muted loop class="videoClip"/>
      <div className="posicion">
        <h1 className="title">Bienvenido!</h1>
        <div>
          <Link to="/home">
            <button className="boton">INGRESAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Landing;
