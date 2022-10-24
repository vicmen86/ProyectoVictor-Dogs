//import React from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDogsName } from "../../redux/actions/index.js";
import "./searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  
  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    if (input.trim().length === 0) {
      setInput("");
      return alert("Ingresa al menos un valor de busqueda");
    } else if (typeof input !== "string" ) {
      setInput("");
      return alert("El perro buscado no existe.");
    } else if (input.length > 1) {
      e.preventDefault();
      dispatch(GetDogsName(input));
      setInput("");
    } else {
      alert("Introduce una busqueda valida con al menos 2 caracteres");
      setInput("");
    }
  }

  return (
    <>
      <div class="search">
        <input
          class="search"
          type="search"
          placeholder="Ingresa tu busqueda!"
          value={input}
          onChange={(e) => handleInputChange(e)}
        ></input>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Buscar
        </button>
      </div>
    </>
  );
};
export default Searchbar;
