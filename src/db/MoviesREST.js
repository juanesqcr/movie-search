// import React from "react";
import axios from "axios";

function getPopularMovies() {
  const path =
    "https://api.themoviedb.org/3/movie/popular?api_key=e34c1f717fdab5d46191eef3205a0558&language=en-US&page=1";
  axios
    .get("path")
    .then(() => {
      console.log("Entro");
    })
    .catch();
  return path;
}

export { getPopularMovies };
