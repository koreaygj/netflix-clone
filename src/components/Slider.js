import { useState, useEffect, useCallback } from "react";
import styles from "./css/Slider.module.css";
import PropTypes from "prop-types";
import ContentContainer from "./ContentContainer";

function Slider({
  title,
  discover,
  type,
  language,
  country,
  listInfo,
  sortBy,
}) {
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);
  const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_TOKEN;
  const BaseURL = "https://api.themoviedb.org/3/";
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getURL = () => {
    if (discover === true) {
      return `${BaseURL}discover/${type}?include_adult=true&language=${language}&page=1&sort_by=${sortBy}.desc&without_genres=10749&with_origin_contry=${country}`;
    } else {
      return `${BaseURL}${type}/${listInfo}?language=${language}&page=1`;
    }
  };
  const getContents = useCallback(async () => {
    const URL = getURL();
    const json = await (
      await fetch(URL, option).catch((error) => {
        console.log(error);
      })
    ).json();
    setContents(() => json.results);
    console.log(contents);
    setLoading(false);
  }, [setContents, contents, getURL, option]);

  useEffect(() => {
    getContents();
  }, []);
  return (
    <div className={styles.contentsSliderSection}>
      <h2 className={styles.contentsSliderTitle}>{title}</h2>
      <div className={styles.slide}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          contents.map((content) => {
            return (
              <div>
                <ContentContainer
                  type={type}
                  id={content.id}
                  title={type === "tv" ? content.name : content.title}
                  imgSrc={content.backdrop_path}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  discover: PropTypes.bool,
  type: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  listInfo: PropTypes.string,
  sortBy: PropTypes.string,
};

export default Slider;
