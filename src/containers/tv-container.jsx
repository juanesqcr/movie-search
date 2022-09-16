import React from "react";
import DisplayCards from "../components/listItems/Showcase.component";

const TvContainer = () => {
  //  Math.floor(Math.random() * 500);
  const tv_id = 36;
  const API =
    "https://api.themoviedb.org/3/tv/popular?api_key=e34c1f717fdab5d46191eef3205a0558&language=en-US&page=1";
  const RecomendationsTVAPI = `https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=e34c1f717fdab5d46191eef3205a0558&language=en-US&page=1`;
  const topRatedShows = "Popular TV Shows";
  const Recomendations = "Recomendations";
  const sectionSelected = "original_name";

  return (
    <React.Fragment>
      <DisplayCards title={topRatedShows} API={API} section={sectionSelected} />
      <DisplayCards
        title={Recomendations}
        API={RecomendationsTVAPI}
        section={sectionSelected}
      />
    </React.Fragment>
  );
};

export default TvContainer;
