import { useCallback, useEffect, useState } from "react";
import styles from "./css/DisplayBoard.module.css";

function DisplayBoard({ id }) {
  const [toPlay, setToPlay] = useState(false);
  const [postImg, setPostImg] = useState("");
  const [youtubeKey, setYoutubeKey] = useState("");
  const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_TOKEN;
  const BaseURL = "https://api.themoviedb.org/3/";
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  const getPoster = async () => {
    const URL = `${BaseURL}tv/${id}?language=ko`;
    const json = await (
      await fetch(URL, option).catch((error) => {
        console.log(`error message!!!! : ${error}`);
      })
    ).json();
    setPostImg(() => json.backdrop_path);
  };

  const getVideo = async () => {
    const URL = `${BaseURL}tv/${id}/videos?language=ko`;
    const json = await (
      await fetch(URL, option).catch((error) => {
        console.log(error);
      })
    ).json();
    getVideoKey(json);
  };

  const getVideoKey = (json) => {
    json.results.map((video) => {
      if (video.type === "Teaser") setYoutubeKey(() => video.key);
    });
  };

  const playVideo = () => {
    setToPlay((prev) => !prev);
    console.log(toPlay);
  };
  useEffect(() => {
    getPoster();
    getVideo();
  }, []);
  return (
    <div>
      <div
        className={styles.area}
        onMouseEnter={() => playVideo()}
        onMouseLeave={() => playVideo()}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${postImg}`}
          className={toPlay ? styles.posterOff : styles.posterOn}
        />
        <iframe
          className={styles.videoOn}
          src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default DisplayBoard;
