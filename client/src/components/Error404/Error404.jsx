import React from "react";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <div className="container2">
        <div>
          <p>OOPS ERROR 404!</p>
        </div>
        <div>
          <p>ALGO SALIO MAL, NO PUDIMOS ENCONTRAR TU SOLICITUD!</p>
        </div>
        <button
          className="getback"
          onClick={() => window.location.replace("/home")}
        >
          VOLVER A HOME
        </button>
      </div>
    </>
  );
};

export default Error404;
