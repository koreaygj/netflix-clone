import { useState, useEffect } from "react";
import TVshow from "./TVshow";
import styles from "./Slider.module.css";
import PropTypes from "prop-types";

function MainBanner({ prop }) {
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
    const json = await (await fetch(`${BaseURL}${prop}`, option)).json();
    setMovies(() => {
      return json.results;
    });
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <main>
      <section className={styles.slide}>
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
      </section>
    </main>
  );
}

MainBanner.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default MainBanner;
