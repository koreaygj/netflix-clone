import { useState, useEffect } from "react";
import styles from "./css/Slider.module.css";
import PropTypes from "prop-types";
import ContentContainer from "./ContentContainer";
import leftButtonImage from "../images/leftBtn.png";
import rightButtonImage from "../images/rightBtn.png";

function Slider({
  title,
  discover,
  type,
  language,
  country,
  listInfo,
  sortBy,
}) {
  const [slide, setSlide] = useState(0);
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
  const getContents = async () => {
    const URL = getURL();
    const json = await (
      await fetch(URL, option).catch((error) => {
        console.log(error);
      })
    ).json();
    setContents(() => json.results);
    setLoading(false);
  };

  const goPrev = () => {
    if (slide < 0) setSlide((cur) => cur + 40);
    console.log(slide);
  };

  const goNext = () => {
    if (slide >= -300) setSlide((cur) => cur - 40);
    console.log(slide);
  };

  const isLeftEnd = () => {
    return slide <= 0 ? true : false;
  };

  const isRightEnd = () => {
    return slide >= 300 ? true : false;
  };

  useEffect(() => {
    getContents();
  }, []);
  return (
    <div className={styles.contentsSliderSection}>
      <p className={styles.contentsSliderTitle}>{title}</p>
      <div
        className={styles.leftBtn}
        onClick={goPrev}
        style={{ display: isLeftEnd() ? "" : "" }}
      >
        <img src={leftButtonImage} />
      </div>
      <div
        className={styles.rightBtn}
        onClick={goNext}
        style={{ display: isRightEnd() ? "" : "" }}
      >
        <img src={rightButtonImage} />
      </div>
      <div
        className={styles.slide}
        style={{ transform: `translateX(${slide}%)` }}
      >
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          contents.map((content, index) => {
            return (
              <div contentId={index}>
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
