import { useCallback, useEffect, useState } from "react";
import styles from "./css/DisplayBoard.module.css";

function DisplayBoard({ id }) {
  const [videos, SetVideos] = useState([]);
  const [youtubeKey, SetYoutubeKey] = useState("");
  const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_TOKEN;
  const BaseURL = "https://api.themoviedb.org/3/";

  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getRecommendMovies = useCallback(async () => {
    const URL = `${BaseURL}tv/${id}/videos?include_video_language&language=ko`;
    const json = await (
      await fetch(URL, option).catch((error) => {
        console.log(error);
      })
    ).json();
    console.log(json.returns);
    SetVideos(() => json.results);
    if (json) getVideoKey();
  }, [videos]);
  const getVideoKey = () => {
    videos.map((video) => {
      if (video.type === "Teaser") SetYoutubeKey(() => video.key);
    });
  };
  useEffect(() => {
    getRecommendMovies();
  }, []);
  return (
    <div className={styles.area}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default DisplayBoard;
