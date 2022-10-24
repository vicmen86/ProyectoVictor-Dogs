import React from "react";
import "./Paginado.css";

const Paginado = ({DogsPerPage,allDogs,paginaSig,paginaPrev,CurrentPage,firstPage,lastPage,
}) => {
  return (
    <nav className="paginado">
      <button className="botonH" onClick={firstPage}>
        Inicio
      </button>
      <button
        disabled={CurrentPage === 1}
        className="botonH"
        onClick={paginaPrev}
      >
        Ant.
      </button>
      <button
        className="botonH"
        disabled={CurrentPage === Math.ceil(allDogs / DogsPerPage)}
        onClick={paginaSig}
      >
        Sig.
      </button>
      <button class="botonH" onClick={lastPage}>
        Fin
      </button>
      
    </nav>
  );
};


export default Paginado;
