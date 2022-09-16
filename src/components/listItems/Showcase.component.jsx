import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./displaycards.css";

const DisplayCards = (props) => {
  const [data, setData] = useState([]);
  const carruselRef = useRef();
  const imgPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(props.API)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      }); // eslint-disable-next-line
  }, []);

  //Seccion para el carrusel
  const scroll = (direction) => {
    var scroll = carruselRef.current;

    if (direction === "right") {
      scroll.scrollBy(350, 0);
    } else {
      scroll.scrollBy(-300, 0);
    }
  };

  return (
    <section>
      <div className="controlador-titulo">
        <h1>{props.title}</h1>
      </div>
      <div className="contenedor-principal">
        <button className="flecha-izquierda" onClick={() => scroll("left")}>
          <FontAwesomeIcon icon={faAngleLeft} inverse />
        </button>
        <div className="contenedor-carrusel">
          <div ref={carruselRef} className="carrusel snaps-inline">
            {data.map((item) => {
              return (
                <div key={item.id} className="slide-elements">
                  <img src={imgPath + item.backdrop_path} alt={item.overview} />
                  <h2>{item.title}</h2>
                  <h2>{item.name}</h2>
                  {/* <p>{movies.overview}</p> */}
                </div>
              );
            })}
          </div>
        </div>
        <button className="flecha-derecha" onClick={() => scroll("right")}>
          <FontAwesomeIcon icon={faAngleRight} inverse />
        </button>
      </div>
    </section>
  );
};

export default DisplayCards;
