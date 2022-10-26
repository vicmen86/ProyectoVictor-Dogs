import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ name, weight, image, temperament }) => {
  let navigate = useNavigate();
  function DetailHandler(e) {
    e.preventDefault();
    navigate(`/dog/${name}`);
  }
  return (
    <>
      <div className="card">
        <img
          src={image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // 
            currentTarget.src ="https://wl-genial.cf.tsp.li/resize/728x/jpg/984/f68/72cf99576ca6989a73ec379efd.jpg";
          }}
          alt="Imagen perro!"
          width="200vh"
          height="150vh"
          onClick={(el) => DetailHandler(el)}
        ></img>
        <h3>{name ? name : "XD"}</h3>
        <div>Peso: {`${weight} KG`}</div>
        <div>
          Temperamento:
          {temperament
            ? temperament.map((el) => el.name)
            : " No temperaments found."}
        </div>
      </div>
    </>
  );
};

export default Card;
