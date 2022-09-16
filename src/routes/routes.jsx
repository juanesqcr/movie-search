import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SearchItemContainer from "../pages/search-item";
import Tv from "../pages/tv";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/TV" element={<Tv />} />
          <Route path="/Search" element={<SearchItemContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AppRoutes;
