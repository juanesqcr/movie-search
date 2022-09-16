import React from "react";
import DisplayCards from "../components/listItems/Showcase.component";

const MoviesContainer = () => {
  const movie_id = Math.floor(Math.random() * 1000);
  const MoviesAPI =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e34c1f717fdab5d46191eef3205a0558&language=en-US&page=1";
  const RecomendationsMoviesAPI = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=e34c1f717fdab5d46191eef3205a0558&language=en-US&page=1`;
  const topRatedMovies = "Top Rated Movies";
  const Recomendations = "Recomendations";
  const sectionSelected = "Movie";

  return (
    <React.Fragment>
      <DisplayCards
        title={topRatedMovies}
        API={MoviesAPI}
        section={sectionSelected}
      />
      <DisplayCards
        title={Recomendations}
        API={RecomendationsMoviesAPI}
        section={sectionSelected}
      />
      <DisplayCards
        title={topRatedMovies}
        API={MoviesAPI}
        section={sectionSelected}
      />
      <DisplayCards
        title={Recomendations}
        API={RecomendationsMoviesAPI}
        section={sectionSelected}
      />{" "}
      <DisplayCards
        title={topRatedMovies}
        API={MoviesAPI}
        section={sectionSelected}
      />
      <DisplayCards
        title={Recomendations}
        API={RecomendationsMoviesAPI}
        section={sectionSelected}
      />
    </React.Fragment>
  );
};

export default MoviesContainer;
