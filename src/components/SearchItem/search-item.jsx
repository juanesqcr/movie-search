import axios from "axios";
import React, { useState } from "react";
import "./search-item.css";

const SearchItems = () => {
  const [search, setSearch] = useState([]);
  const [isFound, setIsFound] = useState({});
  const imgPath = "https://image.tmdb.org/t/p/original";

  const handleChange = (event) => {
    let searched = event.target.value;
    const MovieSearchAPI = `https://api.themoviedb.org/3/search/multi?api_key=e34c1f717fdab5d46191eef3205a0558&language=en-US&query=${searched}&page=1&include_adult=false`;
    axios
      .get(MovieSearchAPI)
      .then((response) => {
        setSearch(response.data.results);
        setIsFound(response.data.total_results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <div className="search-inputs-container">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search a Movie!"
        />
      </div>

      <div className="card-container">
        {search.map((item) => {
          return (
            <div key={item.id} className="product-card">
              <img
                src={imgPath + item.poster_path}
                alt={item.overview}
                className="product-img"
              />
              <div className="product-info">
                <div className="content">
                  <h2>{item.title}</h2>
                  <p>{item.overview}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchItems;
