import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import gif from "../../img/GIFCARGA.gif";
import "./Detail.css";
const Detail = () => {
  const [dog, setDog] = useState({});
  let { name } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/dogs/${name}`)
      .then((response) => response.json())
      .then((response) => setDog(response))
      .catch((error) => {
        window.location.replace("/*");
      });
  }, []);

  return (
    <>
      <div className="detail">
        <Nav />
        <div
          className="loading"
          style={!dog.name ? { display: "block" } : { display: "none" }}
        >
          <p> LOADING!</p>
          <img
            src={gif}
            alt="cargando"
            height="300"
            width="300"
          ></img>
        </div>
        <div style={dog.name ? { display: "block" } : { display: "none" }}>
          <div className="detail2">
            <img
              src={dog.image?.url}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                "https://wl-genial.cf.tsp.li/resize/728x/jpg/984/f68/72cf99576ca6989a73ec379efd.jpg";
              }}
              alt="Dog NOT FOUND"
            ></img>
            <div>Nombre: {dog.name}</div>
            <div>Esperanza de vida: {dog.life_span} </div>
            <div>Peso: {dog.weight?.metric} Kg.</div>
            <div>Altura: {dog.height?.metric} Cm.</div>
            <div>Temperamento: {dog.temperament?.map((el) => el.name)}</div>
            <div>Origen: {dog.origin ? dog.origin : "Unknown"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
