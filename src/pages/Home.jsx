import React from "react";
import Navbar from "../components/navbar/navbar";
import MoviesContainer from "../containers/movies-container";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MoviesContainer />
    </React.Fragment>
  );
};

export default Home;
