import { useState, useEffect } from "react";
import TVshow from "./TVshow";
import styles from "./css/Slider.module.css";
import PropTypes from "prop-types";

function MainBanner({ theme, prop }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_TOKEN;
  const BaseURL = "https://api.themoviedb.org/3/";
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getMovies = async () => {
    const json = await (
      await fetch(`${BaseURL}${prop}`, option).catch((error) => {
        console.log(error);
      })
    ).json();
    setMovies(() => {
      return json.results;
    });
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h2>{theme}</h2>
      <div className={styles.slide}>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          movies.map((movie) => {
            return (
              <TVshow
                id={movie.id}
                title={movie.name}
                imgSrc={movie.backdrop_path}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

MainBanner.propTypes = {
  theme: PropTypes.string.isRequired,
  prop: PropTypes.string.isRequired,
};

export default MainBanner;
