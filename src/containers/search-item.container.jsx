import React from "react";
import SearchItems from "../components/SearchItem/search-item";
import Navbar from "./movies-container";

const SearchItemContainer = () => {
  return (
    <React.Fragment>
      <SearchItems />
      <Navbar />
    </React.Fragment>
  );
};

export default SearchItemContainer;
