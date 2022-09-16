import React from "react";
import Navbar from "../components/navbar/navbar";
import SearchItemContainer from "../components/SearchItem/search-item";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SearchItemContainer />
    </React.Fragment>
  );
};

export default Home;
